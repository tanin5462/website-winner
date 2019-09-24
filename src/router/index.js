import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)


var firebaseConfig = {
  apiKey: "AIzaSyAO6XZYR9cTvXCI-0orTpwlYm3Q2ys-FlY",
  authDomain: "winnerenglish-5f8d3.firebaseapp.com",
  databaseURL: "https://winnerenglish-5f8d3.firebaseio.com",
  projectId: "winnerenglish-5f8d3",
  storageBucket: "winnerenglish-5f8d3.appspot.com",
  messagingSenderId: "40516029824",
  appId: "1:40516029824:web:f5e3d3a9583427c9"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */
Vue.mixin({
  data() {
    return {
      appVersion: "0.0.7",
      drawer: false,
    }
  },
  meta: {
    // sets document title
    title: 'Winner English',
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `${title} : สอนภาษาอังกฤษ เริ่มต้น เบื้องต้น พื้นฐาน ด้วยตัวเอง`,

    // meta tags
    meta: {
      description: {
        name: 'description',
        content: 'Page 1'
      },
      keywords: {
        name: 'keywords',
        content: 'Quasar website'
      },
      equiv: {
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=UTF-8'
      }
    },

    // CSS tags
    link: {
      material: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    },

    // JS tags
    script: {
      ldJson: {
        type: 'application/ld+json',
        innerHTML: `{ "@context": "http://schema.org" }`
      }
    },

    // <html> attributes
    htmlAttr: {
      'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
      empty: undefined // generates <html empty>
    },

    // <body> attributes
    bodyAttr: {
      'action-scope': 'xyz', // generates <body action-scope="xyz">
      empty: undefined // generates <body empty>
    },

    // <noscript> tags
    noscript: {
      default: 'This is content for browsers with no JS (or disabled JS)'
    }
  }
})


export default function ( /* { store, ssrContext } */ ) {
  const Router = new VueRouter({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
