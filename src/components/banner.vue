<template>
  <div class="row">
    <q-resize-observer @resize="onResize" />
    <transition appear enter-active-class="animated fadeInUp">
      <div class="col-12 relative-position">
        <img
          src="../statics/pic/bannerOnline.png"
          v-if="innerWidth > 1023"
          style="width:1400px;height:450px"
        />
        <div :class="{'text-h5':innerWidth < 1101,'text-h4':innerWidth < 1440}" align="center">
          <div
            v-if="dataSchool.type == 'learnOnline'"
            class="q-pt-xl"
            style="top:25%;"
            :class="{'we-text-align':innerWidth <= 1023,'absolute-right banner-online-xs':innerWidth > 1023 && innerWidth < 1101,'banner-online-sm absolute-right':innerWidth >= 1101 && innerWidth <= 1201,'banner-online-md absolute-right':innerWidth >= 1201 && innerWidth <= 1301 ,'banner-online-lg absolute-right':innerWidth >= 1301 && innerWidth <= 1440}"
          >
            <p>ความสามารถของระบบ</p>
            <p>Winner English Online</p>
          </div>
          <div
            v-if="dataSchool.type == 'learnSchool'"
            class="q-pt-xl"
            style="top:25%;"
            :class="{'we-text-align':innerWidth <= 1023,'absolute-right banner-online-xs':innerWidth > 1023 && innerWidth < 1101,'banner-online-sm absolute-right':innerWidth >= 1101 && innerWidth <= 1201,'banner-online-md absolute-right':innerWidth >= 1201 && innerWidth <= 1301 ,'banner-online-lg absolute-right':innerWidth >= 1301 && innerWidth <= 1440}"
          >
            <p>ความสามารถของระบบ</p>
            <p>Winner English for School</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["dataSchool"],
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    }
  }
};
</script>

<style scoped>
.banner-online-xs {
  width: calc(100vh - 520px);
}

.banner-online-sm {
  width: calc(100vh - 420px);
}

.banner-online-md {
  width: calc(100vh - 320px);
}

.banner-online-lg {
  width: calc(100vh - 220px);
}

.we-text-align {
  text-align: center;
}
</style>