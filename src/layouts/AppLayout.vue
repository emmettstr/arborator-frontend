<template>
  <q-layout view="hHh Lpr fFf">
    <q-header :class="$q.dark.isActive?'bg-dark':'bg-white'">
      <q-bar :class="$q.dark.isActive?'bg-dark':'bg-white text-black'">        <!-- class="bg-white text-black" -->
          <!--   :class="$q.dark.isActive ? 'text-white' : 'text-primary'" -->          <q-btn flat @click="drawerLeft = !drawerLeft" round icon="menu"  />
          <a href="/">
          <div class="q-btn__content text-center col items-center q-anchor--skip row">
            <img v-if="$q.dark.isActive" alt="Arborator" src="../statics/svg/arborator.grew.white.svg" style="height: 2.3vw;">
            <img v-else alt="Arborator" src="../statics/svg/arborator.grew.svg" style="height: 2.3vw;">
          </div>
          </a>          <q-space />          <q-breadcrumbs :active-color="$q.dark.isActive?'white':'primary'" :class="($q.dark.isActive?'text-grey':'text-black') + ' mobile-hide native-mobile-hide within-iframe-hide gt-xs'" style="max-height:20px;max-width:70vh;overflow:y;">
            <q-breadcrumbs-el v-if="notHome" icon="home" to="/" />
            <q-breadcrumbs-el v-if="$route.path.startsWith('/projects/')" icon="view_module" to="/projects" />
            <q-breadcrumbs-el v-if="$route.params.projectname != null" :label="$route.params.projectname" icon="fas fa-tree" :to="'/projects/'+$route.params.projectname" />
            <q-breadcrumbs-el v-if="$route.params.samplename != null && $route.params.projectname != null" :label="$route.params.samplename" icon="assignment" :to="'/projects/'+$route.params.projectname+'/'+$route.params.samplename" />
          </q-breadcrumbs>          <q-space />          <div class="q-gutter-sm row items-center no-wrap"  size="4rem">
          
          <q-select v-model="lang" :options="langOptions" dense borderless options-dense map-options emit-value >
            <template v-slot:append>
              <q-avatar>
                <q-icon name="fas fa-globe" />
              </q-avatar>
            </template>
          </q-select>

          <q-btn flat round @click="toggleDarkMode()"  :icon="$q.dark.isActive?'lightbulb':'brightness_2'"></q-btn>
          <q-btn-dropdown v-show="!store.getters.isLoggedIn" color="secondary" outline label="Log In" icon="account_circle">
            <q-list>
              <q-item clickable v-close-popup @click="tologin(store.getters.getSource + '/login/google')">
                <q-item-section avatar>
                  <q-icon name='fab fa-google'/>
                </q-item-section>
                <q-item-section>
                  <!-- <q-item-label caption>{{$t('loginselector')}}</q-item-label> -->
                  <q-item-label>Google</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="tologin(store.getters.getSource + '/login/github')">
                <q-item-section avatar>
                  <q-icon name='fab fa-github'/>
                </q-item-section>
                <q-item-section>
                  <!-- <q-item-label caption>{{$t('loginselector')}}</q-item-label> -->
                  <q-item-label>GitHub</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn v-show="store.getters.isLoggedIn" round flat dense color="purple"  >
            <q-avatar >
              <q-icon v-show="store.getters.getUserInfos.avatar == ''" name="account_circle" />
              <q-avatar v-show="store.getters.getUserInfos.picture_url != ''" :key="store.getters.getAvatarKey" color="default" text-color="white"  size="xs"  >
                  <img :src="store.getters.getUserInfos.picture_url">
              </q-avatar>
            </q-avatar>            <q-menu transition-show="jump-down" transition-hide="jump-up">
              <div class="row no-wrap q-pa-md">
                <div class="column">
                    <q-list>
                      <q-item clickable v-ripple to="/settings">
                        <q-item-section avatar> <q-icon name="settings" /> </q-item-section>
                        <q-item-section> {{$t('settings')}} </q-item-section>
                      </q-item>
                      <q-item v-show="store.getters.getUserInfos.super_admin" clickable v-ripple to="/admin">
                        <q-item-section avatar> <q-icon name="vpn_key" /> </q-item-section>
                        <q-item-section> {{$t('admin')}} </q-item-section>
                      </q-item>
                    </q-list>
                </div>                <q-separator vertical inset class="q-mx-lg" />                <div class="column items-center">
                  <q-icon v-show="store.getters.getUserInfos.avatar == ''" name="account_circle" />
                  <q-avatar v-show="store.getters.getUserInfos.picture_url != ''" :key="store.getters.getAvatarKey" color="default" text-color="white">
                    <img :src="store.getters.getUserInfos.picture_url">
                  </q-avatar>
                  <div class="text-subtitle1 q-mt-md q-mb-xs">{{store.getters.getUserInfos.username}}</div>
                  <q-btn color="negative" label="Logout" size="sm" v-close-popup @click="logout()"/>
                </div>
              </div>
            </q-menu>
          </q-btn>
          <q-btn flat dense @click="$q.fullscreen.toggle()" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
           :label="$q.fullscreen.isActive ? '' : ''">
            <q-tooltip :delay="300" content-class="bg-white text-primary">{{$t('fullscreen')}}</q-tooltip>
          </q-btn>
        </div>      </q-bar>    </q-header>    <q-page-container>
      <router-view />    </q-page-container>    <q-footer >
      <q-item-label caption class="text-center text-grey-3">
       {{$t('footer')[0]}} <q-icon name="favorite" style="font-size:22px;color: #dd137b;height:18px;vertical-align:text-bottom"/> {{$t('footer')[1]}}        <img aria-hidden="true" role="presentation" src="../statics/svg/paris.svg" class="" style="color: #dd137b;height:18px;">
        {{$t('footer')[2]}}
      <a href="https://team.inria.fr/almanach" target="_blank">
        <img aria-hidden="true" role="presentation" src="../statics/svg/almanachInria.svg" class="" style="height:18px;">
      </a>
       v1.0 beta (20200515)</q-item-label>
    </q-footer>    <q-drawer
        v-model="drawerLeft"
        :width="200" :breakpoint="400" :content-class="$q.dark.isActive?'bg-dark':'bg-white'"
        :mini="miniState"  @mouseover="miniState = false"  @mouseout="miniState = true"
        mini-to-overlay bordered
      >      <q-scroll-area  style="height: calc(100% - 0px); margin-top: 0px; ">
        <q-list padding>
          <div v-for="(menuItem, index) in menuList" :key="index">            <q-item  v-show="store.getters.isLoggedIn || menuItem.public" :to="menuItem.to" clickable :active="menuItem.label == $route.currentRoute" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>            <q-separator v-if="menuItem.separator" spaced/>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </q-layout>
</template><script>
import { openURL } from 'quasar';
import api from '../boot/backend-api';
import Store from '../store/index';export default {
  name: 'TempLayout',
  data () {
    return {
      store: Store,
      drawerLeft: false, //this.$q.platform.is.mobile?false:true,
      miniState: true,
      isAdmin: false,
      search: '',
      menuList: [
          {
            icon: 'house',
            label: this.$t('navhome'),
            separator: false,
            public: true,
            to: '/#',
            bottom: false
          },
          {
            icon: 'library_books',
            label: this.$t('navprojects'),
            separator: true,
            public: true,
            to: '/projects',
            bottom: false
          },
          {
            icon: 'settings',
            label: this.$t('navsettings'),
            separator: false,
            public: false,
            to: '/settings',
            bottom: true
          }
          // {
          //   icon: 'vpn_key',
          //   label: 'Admin',
          //   separator: false,
          //   public: false,
          //   to: '/adminpanel',
          //   bottom: false
          // }
        ],
        lang: this.$i18n.locale,
        langOptions: [
          { value: 'en-us', label: 'EN', img: '../statics/images/usflag.svg' },
          { value: 'fr-fra', label: 'FR', img: '../statics/images/frenchflag.svg' }
        ]
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.$ls.set('arbolang', lang);
    }
  },
  computed:{
    notHome(){ return !Object.values(this.$route.params).every(o => o === null); }  },
  methods: {
    openURL,
    toggleDarkMode(){ this.$q.dark.toggle();this.$ls.set('dm', this.$q.dark.isActive); },
    login(provider){
      api.auth(provider).then(response => { }).catch(error => {this.$store.dispatch("notifyError", {error: error});})
    },
    tologin(url){
      window.location.assign(url);
      // console.log(this.store.getters.getSource + '/login/google'); openURL(this.store.getters.getSource + '/login/google');
      // window.location.href = 'https://arboratorgrew.ilpga.fr:8888/login/google';
      // window.location.assign("https://arboratorgrew.ilpga.fr:8888/login/google");
      // window.location.assign("https://profiterole-almanach-ui.paris.inria.fr:8888/");
    },
    logout() {
      this.store.dispatch("logout", { user: this.store.getters.getUserInfos.username}).then(() => {  this.$router.push('/').catch(error => {});  }).catch(error => {  this.$store.dispatch("notifyError", {error: error});  });
    },
  }
}
</script><style>
</style>
