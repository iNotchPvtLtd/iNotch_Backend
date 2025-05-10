// import type { Core } from '@strapi/strapi';
import registerLifecycles from './functions/register-lifecycles';


export default {
  async register() {
    await registerLifecycles();
  },

   bootstrap() {
    // await registerLifecycles();
  },

};


