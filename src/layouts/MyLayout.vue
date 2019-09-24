<template>
  <q-layout view="hHh lpR fFf">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-5" style="max-width:1400px;width:100%;margin:auto;">
      <q-toolbar align="center" class="text-white q-py-md bg-primary">
        <q-toolbar-title>
          <span>Winner&nbsp;</span>
          <span class="text-yellow-4">English</span>
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="text-primary no-margin no-padding">
        <q-tabs
          stretch
          narrow-indicator
          v-model="page"
          align="left"
          class="col-12 text-primary shadow-2 q-py-sm q-px-sm"
        >
          <q-btn
            flat
            @click="drawer = !drawer"
            v-if="innerWidth < 1024"
            round
            size="lg"
            dense
            icon="menu"
          />
          <router-link class="text-decoration text-primary" to="/">
            <q-tab v-if="innerWidth > 1023" name="home" style="min-width:150px;">
              <span class="text-h6">หน้าแรก</span>
            </q-tab>
          </router-link>

          <router-link class="text-decoration text-primary" to="/online">
            <q-tab v-if="innerWidth > 1023" name="learnonline" style="min-width:150px;">
              <span class="text-h6">ระบบออนไลน์</span>
            </q-tab>
          </router-link>

          <router-link class="text-decoration text-primary" to="/school">
            <q-tab v-if="innerWidth > 1023" name="learnschool" style="min-width:150px;">
              <span class="text-h6">ระบบโรงเรียน</span>
            </q-tab>
          </router-link>

          <q-space />

          <q-btn
            v-if="$route.name != 'login'"
            class="bg-primary text-white rounded-borders"
            style="width:120px;"
            to="/login"
            round
          >
            <span class="text-h6">เข้าสู่ระบบ</span>
          </q-btn>
        </q-tabs>
      </q-toolbar>

      <q-drawer
        v-model="drawer"
        :width="300"
        :breakpoint="1024"
        overlay
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="q-pt-md" align="center">
            <div>
              <img src="../statics/iconWinner.png" style="width:50px;" alt />
            </div>
            <div>
              <span>Winner English</span>
            </div>
          </div>
          <hr />
          <q-list>
            <q-item clickable v-ripple @click="tab = 'homepage',drawer = !drawer">
              <q-item-section avatar>
                <q-icon class />
              </q-item-section>
              <q-item-section>หน้าแรก</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple @click="tab = 'onlinepage',drawer = !drawer">
              <q-item-section avatar>
                <q-icon class />
              </q-item-section>
              <q-item-section>ระบบออนไลน์</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple @click="tab = 'schoolpage',drawer = !drawer">
              <q-item-section avatar>
                <q-icon class />
              </q-item-section>
              <q-item-section>ระบบโรงเรียน</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <!-- <q-btn
        icon="fas fa-chevron-up"
        fab
        class="fixed-bottom-right q-ma-md bg-primary text-white"
        @click="backTop()"
      ></q-btn>-->
    </div>
  </q-layout>
</template>

<script>
import { db } from "../router/index.js";
export default {
  data() {
    return {
      page: "home",
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  methods: {
    async checkVersion() {
      let webVersion = await db
        .collection("version")
        .doc("website")
        .get();
      if (webVersion.data().version != this.appVersion) {
        this.$router.push("/loading");
      }
    },
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    this.checkVersion();
  }
};
</script>
<style >
.text-decoration {
  text-decoration: none;
}
.animated {
  animation-duration: 0.59s;
}
</style>