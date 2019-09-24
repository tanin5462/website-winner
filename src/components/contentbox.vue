<template>
  <div>
    <q-resize-observer @resize="onResize" />
    <transition appear enter-active-class="animated fadeInUp">
      <div class="row q-py-md-xl q-py-xs-xl q-pa-md-md q-pa-xs-xs">
        <div class="col-12 q-py-lg" v-if="dataSchool.type == 'learnSchool'" align="center">
          <span class="text-h4">สำหรับนักเรียน</span>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md">
          <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
            <div class="col-md-3 col-sm-3 col-xs-12 self-center">
              <span class="text-primary text-h2">
                <span class="fas fa-dna"></span>
              </span>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
              <div>
                <div class="text-h5">
                  <span>โครงสร้างบทเรียน</span>
                </div>
                <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                  <span>แบ่งออกเป็น 12 Level เพื่อให้ เหมาะสมกับพืนฐานของผู้เรียน</span>
                </div>
                <div class="q-py-sm">
                  <router-link to="/structure" class="we-text-underline text-primary">
                    <span>ดูเพิ่มเติม ></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md">
          <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
            <div class="col-md-3 col-sm-3 col-xs-12 self-center">
              <span class="text-primary text-h2">
                <span class="fab fa-react"></span>
              </span>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
              <div>
                <div class="text-h5">
                  <span>ครบทุกทักษะ</span>
                </div>
                <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                  <span>ครบ 6 ทักษะที่จำเป็น คำศัพท์ ไวยากรณ์ อ่าน เขียน ฟัง และพูด</span>
                </div>
                <div class="q-py-sm">
                  <router-link to="/structure" class="we-text-underline text-primary">
                    <span>ดูเพิ่มเติม ></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md">
          <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
            <div class="col-md-3 col-sm-3 col-xs-12 self-center">
              <span class="text-primary text-h2">
                <span class="fas fa-brain"></span>
              </span>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
              <div>
                <div class="text-h5">
                  <span>เรียนรู้ได้ด้วยตัวเอง</span>
                </div>
                <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                  <span>เรียนผ่านกระบวนการเรียนรู้จากการปฎิบัติจริง (Leaning by doing)</span>
                </div>
                <div class="q-py-sm">
                  <router-link to="/structure" class="we-text-underline text-primary">
                    <span>ดูเพิ่มเติม ></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md">
          <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
            <div class="col-md-3 col-sm-3 col-xs-12 self-center">
              <span class="text-primary text-h2">
                <span class="fas fa-mobile-alt"></span>
              </span>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
              <div>
                <div class="text-h5">
                  <span>รองรับอุปกรณ์ที่หลากหลาย</span>
                </div>
                <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                  <span>เรียนได้ตังแต่คอมพิวเตอร์ตั้งโต๊ะไปจนถึงโทรศัพท์มือถือ</span>
                </div>
                <div class="q-py-sm">
                  <router-link to="/" class="we-text-underline text-primary">
                    <span></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md">
          <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
            <div class="col-md-3 col-sm-3 col-xs-12 self-center">
              <span class="text-primary text-h2">
                <span class="fas fa-cogs"></span>
              </span>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
              <div>
                <div class="text-h5">
                  <span>จัดรูปแบบการเรียนของคุณ</span>
                </div>
                <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                  <span>เลือกเน้นทักษะภาษาอังกฤษ ที่ต้องการด้วยตัวคุณเอง</span>
                </div>
                <div class="q-py-sm">
                  <router-link to="/structure" class="we-text-underline text-primary">
                    <span>ดูเพิ่มเติม ></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md">
          <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
            <div class="col-md-3 col-sm-3 col-xs-12 self-center">
              <span class="text-primary text-h2">
                <span class="far fa-gem"></span>
              </span>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
              <div>
                <div class="text-h5">
                  <span>สนุกกับการเรียน</span>
                </div>
                <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                  <span>ตังเป้าหมาย ให้ผลตอบแทนสร้างแรงจูงใจ</span>
                </div>
                <div class="q-py-sm">
                  <router-link to="/" class="we-text-underline text-primary">
                    <span></span>
                  </router-link>
                </div>
              </div>
            </div>
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
.we-text-underline {
  text-decoration: none;
}

.we-text-align {
  text-align: center;
}
</style>