<template>
  <q-page>
    <!-- Components Banner Box -->

    <div>
      <banner-box :dataSchool="{type:'learnOnline'}"></banner-box>

      <!-- Components Content Box -->

      <content-Box :dataSchool="{type:'learnOnline'}"></content-Box>

      <div class="row bg-primary q-py-xl" align="center">
        <div class="col-12 q-py-md text-white">
          <div>
            <span class="text-h3">เรียนฟรี 7 วัน</span>
          </div>
          <div class="q-my-sm q-px-lg">
            <span class="text-body1">ไม่มีข้อจำกัด ไม่มีข้อผูกมัด ในการทดลองเรียนใดๆทั้งสิ้น</span>
          </div>
          <div class="q-py-md">
            <q-btn class="q-px-xl q-py-sm rounded-borders" label="ทดลองเรียน" outline />
          </div>
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
import appFooter from "../components/footer.vue";
export default {
  components: {
    bannerBox,
    contentBox,
    appFooter
  }
};
</script>
<style scoped>
</style>