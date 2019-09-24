<template>
  <div>
    <q-resize-observer @resize="onResize" />
    <div class="row q-py-md-xl q-py-xs-xl q-pa-md-md q-pa-xs-xs">
      <div class="col-12 q-py-lg" align="center">
        <span class="text-h4">สำหรับคุณครู</span>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md">
        <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
          <div class="col-md-3 col-sm-3 col-xs-12 self-center">
            <span class="text-primary text-h2">
              <span class="fas fa-chalkboard-teacher"></span>
            </span>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-12 q-py-md q-px-sm">
            <div>
              <div class="text-h5">
                <span>ห้องเรียนอัจฉริยะ</span>
              </div>
              <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                <span>ใช้ติดตามสถานะ และพฤติกรรมการเรียน</span>
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
              <span class="fas fa-school"></span>
            </span>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-12 q-py-md q-px-sm">
            <div>
              <div class="text-h5">
                <span>ระบบการสอนในห้องเรียน</span>
              </div>
              <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                <span>สื่อการสอนบนจอทีวี หรือโปรเจคเตอร์ เพื่อใช้เรียนร่วมกันในห้องเรียน</span>
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
              <span class="far fa-star"></span>
            </span>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-12 q-py-md q-px-sm">
            <div>
              <div class="text-h5">
                <span>ระบบคะแนนเก็บ</span>
              </div>
              <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                <span>ระบบคำนวณคะแนนเก็บ โดยครูผู้สอนสามารถปรับเปลื่ยนหลักการให้คะแนนอิสระ</span>
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
              <span class="fas fa-file-alt"></span>
            </span>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-12 q-py-md q-px-sm">
            <div>
              <div class="text-h5">
                <span>เอกสารประกอบการเรียน</span>
              </div>
              <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                <span>ช่วยวางแผนการสอน จัดเตรียมเนื้อหา และเอกสารประกอบการเรียน</span>
              </div>
              <div class="q-py-sm">
                <router-link to="/" class="we-text-underline text-primary">
                  <span>ตัวอย่างแผนการสอน ></span>
                  <br />
                  <span>ตัวอย่างเอกสารการสอน ></span>
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
              <span class="fas fa-envelope-open-text"></span>
            </span>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-12 q-py-md q-px-sm">
            <div>
              <div class="text-h5">
                <span>ระบบออกข้อสอบ</span>
              </div>
              <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                <span>สร้างข้อสอบเพื่อวัดผลการเรียนรู้ จากคลังข้อสอบของ Winner English</span>
              </div>
              <div class="q-py-sm">
                <router-link to="/" class="we-text-underline text-primary">
                  <span>ตัวอย่างข้อสอบ ></span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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