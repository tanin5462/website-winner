<template>
  <div>
    <q-resize-observer @resize="onResize" />

    <transition appear enter-active-class="animated fadeInUp">
      <div class="q-mt-xs" align="center">
        <div class="row q-my-xl">
          <div class="text-h4 col-12 text-blue-grey-10 q-px-xl">
            <span>โปรแกรมเรียนภาษาอังกฤษออนไลน์</span>
          </div>
          <div class="text-h4 col-12 text-blue-grey-10 q-px-xl">
            <span>สำหรับเด็กประถมและมัธยมต้น</span>
          </div>
          <!-- <div class="col-12">
              <q-btn flat label="ดูเพิ่มเติม >" class="text-primary text-body1" />
              <q-btn flat label="ดูเพิ่มเติม >" class="text-primary text-body1" />
          </div>-->
          <div class="col-12 q-my-md-xl q-my-xs-lg q-px-sm">
            <img
              src="../statics/pic/content.png"
              spinner-color="primary"
              class="my-img-content"
              style="max-width:750px"
            />
          </div>
        </div>
        <div class="row q-my-md bg-primary">
          <div class="col-md-5 self-center col-xs-12 text-white q-pa-lg q-py-xl">
            <div class="text-h4">ครบทุกทักษะที่จำเป็นสำหรับ</div>
            <div class="text-h4">การเรียนภาษาอังกฤษ</div>
            <div class="text-h6 q-mt-md">คำศัพท์ ไวยากรณ์ การอ่าน การเขียน การฟัง และการพูด</div>
            <!-- <q-btn outline class="text-white text-body1 q-mt-lg" label="ดูเพิ่มเติม" /> -->
          </div>
          <div class="col-md-7 col-xs-12">
            <img src="../statics/pic/img1.jpg" class="my-img-content" alt="Winner" />
          </div>
        </div>
        <div class="row reverse q-my-md">
          <div class="col-md-5 col-xs-12 text-blue-grey-10 self-center q-pa-lg q-py-xl">
            <div class="text-h4">รองรับการเรียนแบบห้องเรียน</div>
            <div class="text-h4">ในระบบโรงเรียน</div>
            <div class="text-h6 q-mt-md">โปรแกรมผู้ช่วยครู แผนการสอน</div>
            <div class="text-h6">เอกสารประกอบการเรียน</div>
            <!-- <q-btn outline class="text-white text-body1 q-mt-lg" label="ดูเพิ่มเติม" /> -->
          </div>
          <div class="col-md-7 col-xs-12">
            <img src="../statics/pic/img2.png" class="my-img-content" alt="Winner" />
          </div>
        </div>
      </div>
    </transition>

    <!-- Components Footer Box -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import { db } from "../router/index.js";
import contentBox from "../components/contentbox.vue";
import forSchool from "../components/contentbox-forschool.vue";
import appFooter from "../components/footer.vue";
import bannerBox from "../components/banner.vue";
export default {
  data() {
    return {
      tab: "homepage",
      loginTab: "student",
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  components: {
    bannerBox,
    contentBox,
    forSchool,
    appFooter
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    }
  }
};
</script>