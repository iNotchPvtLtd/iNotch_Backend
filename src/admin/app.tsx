import type { StrapiApp } from '@strapi/strapi/admin';
// import logo from './extension/logo.png';
export default {
  config: {

    // auth:{
    //   logo,
    // },

    // head: {
    //   favicon: logo,
    // },

    // menu: {
    //   logo,
    // },

    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title" : "Store Dashboard",

        "app.components.LeftMenu.navbrand.workplace" : "Testing",

        "Auth.form.welcome.title" : "Login to iMakeSite",

        "Auth.form.welcome.subtitle" : "Login to your account",

        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Preference changes will apply only to you."
      },
    },

    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
