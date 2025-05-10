import lifecycles from '../lifecycles';
import axios from 'axios';


export default function registerLifecycles() {
  console.log('🔧 registerLifecycles() called');

  strapi.db.lifecycles.subscribe({
    models: ['api::tesla.tesla'],

    async afterCreate(event) {
      console.log('✅ afterCreate triggered', event);
    },

    async afterUpdate(event) {
      triggerGitHubWebhook(event.model.singularName);
      console.log('✅ afterUpdate triggered', event);
    },

    async afterDelete(event) {
      console.log('✅ afterDelete triggered', event);
    },
  });
}



const triggerGitHubWebhook = async (collectionName: string) => {
  try {

    console.log('triggerGitHub webhook called with collectionName:', collectionName);

    // Define repositories for different collections or single types
    const repositories: Record<string, string> = {
        'tesla': 'strapi-static-tesla',
        'pepsi': 'strapi-static-pepsi',
        'coke': 'strapi-static-coke',
        'flynow': 'strapi-static-flynow',
        'nextly': 'strapi-static-nextly',
        'sprite': 'strapi-static-sprite',
        'fanta': 'strapi-static-fanta',
        'thumsup': 'strapi-static-thumsup',
    };

    const collectionNameLower = collectionName.toLowerCase();

    // Find the repository name based on the collection name
    const repoName = Object.keys(repositories).find((key) =>
        collectionNameLower.startsWith(key.toLowerCase())
    );

    if (!repoName) {
        throw new Error(`Repository not defined for collection: ${collectionName}`);
    }

    const repo = repositories[repoName];

    console.log('repo:', repo);

    // Send the request to trigger GitHub deployment
    await axios.post(
      `https://api.github.com/repos/iNotchPvtLtd/${repo}/dispatches`, 
      { event_type: 'strapi-update' },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
      }
    );
    strapi.log.info(`✅ Webhook triggered for ${repoName}`);
  } catch (error) {
    if (error.response && error.response.status === 404) {
        strapi.log.warn(`⚠️ Repository or dispatches not found for ${collectionName}. Deployment not triggered.`);
      } else {
        strapi.log.error('❌ Error triggering GitHub dispatch:', error.message || error);
      }
    
    }
  }


// const registerLifecycles = async () => {
//   console.log('🚀 Registering global lifecycle hooks');
//   const models = Object.values(strapi.db.metadata);

//   console.log(models);

//   models.forEach((model: any) => {
//     if (model.kind === 'collectionType' || model.kind === 'singleType') {
//       model.lifecycles = lifecycles;
//       strapi.log.info(`✅ Lifecycle applied to: ${model.uid}`);
//     }
//   });

//   strapi.log.info('✅ Global lifecycle hooks registered');
// };

// export default registerLifecycles;