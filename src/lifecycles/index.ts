//lifecycle hook logic
import axios from 'axios';

  const getCollectionNameFromEvent = (event: any) => {
    console.log('getCollectionNameFromEvent called with event:', event);
    const uid = event.model?.uid || '';
    return uid.split('.').pop(); // returns 'tesla', 'pepsi-header', etc.
  };

  const triggerGitHubDeployment = async (collectionName: string) => {
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

  const lifecycles = {
    async afterCreate(event: any) {
      strapi.log.info('🔁 afterCreate Webhook triggered for:', event.model?.uid);
      const collectionName = getCollectionNameFromEvent(event);
      if (collectionName) await triggerGitHubDeployment(collectionName);
    },
    async afterUpdate(event: any) {
      strapi.log.info('🔁 afterUpdate Webhook triggered for:', event.model?.uid);
      const collectionName = getCollectionNameFromEvent(event);
      await triggerGitHubDeployment(collectionName);
    },
    async afterDelete(event: any) {
      const collectionName = getCollectionNameFromEvent(event);
      await triggerGitHubDeployment(collectionName);
    },
  };

  export default lifecycles;