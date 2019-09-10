// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'i18n',
      'axios'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader', 'QFooter',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn', 'QBtnDropdown', 'QBtnGroup',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QSpace',
        'QBadge',
        'QTooltip',
        'QAvatar',
        'QCard', 'QCardSection', 'QCardActions', 'QSeparator',
        'QParallax',
        'QInput', 'QSelect', 'QField', 'QForm', 'QRadio',
        'QAvatar', 'QChip',
        'QTable', 'QTr', 'QTd', 'QPopupEdit', 'QMenu', 'QToggle', 'QMarkupTable',
        'QBreadcrumbs',
        'QBreadcrumbsEl',
        'QDialog',
        'QUploader',
        'QBar', 'QBanner', 'QImg',
        'QTab', 'QTabs', 'QTabPanels', 'QTabPanel', 'QExpansionItem',
        'QFab', 'QFabAction'
      ],

      directives: [
        'Ripple'
      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'LoadingBar',
        'Loading',
        'AppVisibility',
        'AppFullscreen'
      ]
    },

    supportIE: true,

    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: true, // opens browser window automatically
      proxy: {
        '/home': {
          target: '127.0.0.1:5000',
          ws: true,
          changeOrigin: true
        }
      }
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'arborator',
        // short_name: 'arborator',
        // description: 'Frontend for arborator draft',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'ilpga.arborator',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'arborator-frontend'
      }
    }
  }
}
