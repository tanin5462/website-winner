<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <!-- Components Banner Box -->
    <banner-box :dataSchool="{type:'learnSchool'}"></banner-box>

    <!-- Components Content Box -->
    <content-Box :dataSchool="{type:'learnSchool'}"></content-Box>

    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <img src="../statics/pic/forschool1.jpg" style="width:100%;" alt />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-6" v-show="innerWidth > 1023">
        <img src="../statics/pic/forschool2.jpg" style="width:100%;" alt />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12" v-show="innerWidth > 599 ">
        <img src="../statics/pic/forschool3.jpg" style="width:100%;" alt />
      </div>
    </div>

    <for-school :dataSchool="{type:'learnSchool'}"></for-school>

    <div class="row bg-primary q-py-xl" align="center">
      <div class="col-12 q-py-xl text-white">
        <div>
          <span class="text-h3">สนใจทดลองใช้</span>
        </div>
        <div class="q-my-sm" :class="{'q-px-lg':innerWidth > 599}">
          <span
            :class="{'text-body1':innerWidth < 400,'text-h6':innerWidth < 626,'text-h4':innerWidth > 625}"
          >ติดต่อ: 098-276-4881 (คุณ มณีนารถ)</span>
        </div>
      </div>
    </div>

    <!-- Components Footer Box -->
    <app-footer></app-footer>
  </q-page>
</template>

<script>
import bannerBox from "../components/banner.vue";
import contentBox from "../components/contentbox.vue";
import forSchool from "../components/contentbox-forschool.vue";
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
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