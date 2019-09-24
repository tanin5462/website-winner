<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <transition appear enter-active-class="animated fadeInUp">
      <div>
        <div class="row q-py-xl" style="width:90%;margin:auto;">
          <div class="col-md-5 col-xs-12 q-pa-md-lg q-pa-xs-xs q-py-xs-lg">
            <div class="q-pb-md text-h5">
              <span>โครงสร้างบทเรียนของ Winner English</span>
            </div>
            <div class="text-body1">
              <span>
                แบ่งออกเป็น 12 Level เพื่อให้เหมาะสมกับพื้นฐานภาษาอังกฤษของผู้เรียนแต่ละคน เมื่อผู้เรียนเรียนครบทั้ง 12 Level ผู้เรียน
                จะได้เรียนรู้คําศัพท์ประมาณ 3,000 คํา ซึ่งครอบคลุมคําศัพท์
                ที่ใช้พูดและเขียนถึง 86% ทําให้ผู้เรียนสามารถใช้ภาษาอังกฤษ
                ในชีวิตประจําวันได้*
              </span>
              <br />
              <br />
              <span>*อ้างอิงจากข้อมูลการศึกษาของ Pearson Education Limited</span>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md-md q-pa-xs-xs" align="center">
            <img
              style="max-width:450px;width:100%;"
              src="../statics/pic/graph.png"
              class
              alt="Winner"
            />
          </div>
        </div>

        <div class="bg-primary q-mt-lg q-py-md-xl q-py-xs-md">
          <div class="row q-py-xs-lg q-pa-md-md">
            <div
              class="col-md-6 col-sm-5 col-xs-12 q-pa-md-md q-pa-xs-md self-center"
              align="center"
            >
              <img
                style="max-width:500px;width:100%; "
                src="../statics/pic/16unit.png"
                class
                alt="Winner"
                v-if="innerWidth > 1023"
              />
              <img
                style="max-width:270px;width:100%; "
                src="../statics/pic/16unitMolie.png"
                class
                alt="Winner"
                v-if="innerWidth < 1024"
              />
            </div>
            <div
              class="q-py-md-xl q-pt-xs-lg q-px-md-md text-white col-md-6 col-sm-7 col-xs-12"
              :class="{'self-center':innerWidth > 1023}"
            >
              <div
                align="left"
                class="q-pa-xs-md text-h5"
                :class="{'q-px-xs-lg ; ':innerWidth < 600}"
              >
                <div class="q-pb-md">
                  <span>โครงสร้างระดับ Level</span>
                </div>
                <div class="text-body1">
                  <span>
                    ในแต่ละ Level จะประกอบด้วย 16 Unit
                    ซึ่งแต่ละ Unit ใช้เวลาเรียนประมาณ 1.5 – 2 ชั่วโมง ซึ่งเป็นระยะเวลาที่
                    เหมาะสมสําหรับเด็กในการเรียนรู้ภาษาอังกฤษ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="we-text-align q-pt-xl">
            <div class="text-h5" :class="{'q-px-xs-lg  ':innerWidth < 600}">
              <div class="q-pb-md">
                <span>โครงสร้างระดับ Unit</span>
              </div>
            </div>
            <div class="text-body1 q-px-xs-md" align="center">
              <div class="p-px-md-xl">
                <span>
                  ในแต่ละ Unit จะประกอบด้วย 5 ส่วน ซึ่งแต่ละส่วนได้รับการออกแบบ
                  <br v-if="innerWidth > 599" />มาโดยเฉพาะ เพื่อการเรียนรู้ในแต่ละทักษะของผู้เรียน
                </span>
              </div>
              <div class="q-pa-sm text-primary">
                <span>ดูเพิ่มเติม ></span>
              </div>
            </div>
          </div>
          <div class="row q-py-xs-xl q-pa-md-md q-pa-xs-md q-mb-md-lg q-mb-xs-xs">
            <div
              class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md-md q-px-sm-md q-px-xs-sm"
            >
              <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
                <div class="col-md-3 col-sm-3 col-xs-12 self-center">
                  <span class="text-primary text-h2">
                    <span class="fas fa-font"></span>
                  </span>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
                  <div>
                    <div class="text-h5">
                      <span>Vocabulary</span>
                    </div>
                    <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                      <span>บทเรียนเสริมคำศัพท์ให้กับน้องๆ ที่มีคำศัพทมากถึงประมาณ 3,000 คำ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md-md q-px-sm-md q-px-xs-sm"
            >
              <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
                <div class="col-md-3 col-sm-3 col-xs-12 self-center">
                  <span class="text-primary text-h2">
                    <span class="fas fa-spell-check"></span>
                  </span>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
                  <div>
                    <div class="text-h5">
                      <span>Grammar</span>
                    </div>
                    <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                      <span>บทเรียนเสริมคำศัพท์ให้กับน้องๆ ที่มีคำศัพทมากถึงประมาณ 3,000 คำ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md-md q-px-sm-md q-px-xs-sm"
            >
              <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
                <div class="col-md-3 col-sm-3 col-xs-12 self-center">
                  <span class="text-primary text-h2">
                    <span class="fas fa-newspaper"></span>
                  </span>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
                  <div>
                    <div class="text-h5">
                      <span>Reading</span>
                    </div>
                    <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                      <span>บทเรียนเสริมคำศัพท์ให้กับน้องๆ ที่มีคำศัพทมากถึงประมาณ 3,000 คำ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md-md q-px-sm-md q-px-xs-sm"
            >
              <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
                <div class="col-md-3 col-sm-3 col-xs-12 self-center">
                  <span class="text-primary text-h2">
                    <span class="fas fa-pen-nib"></span>
                  </span>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
                  <div>
                    <div class="text-h5">
                      <span>Writing</span>
                    </div>
                    <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                      <span>บทเรียนเสริมคำศัพท์ให้กับน้องๆ ที่มีคำศัพทมากถึงประมาณ 3,000 คำ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-py-lg q-px-md-md q-px-sm-md q-px-xs-sm"
            >
              <div class="row q-px-md-sm q-px-xs-xs" :class="{'we-text-align ':innerWidth < 600}">
                <div class="col-md-3 col-sm-3 col-xs-12 self-center">
                  <span class="text-primary text-h2">
                    <span class="fas fa-headphones"></span>
                  </span>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-12 q-py-md">
                  <div>
                    <div class="text-h5">
                      <span>Listening & Speaking</span>
                    </div>
                    <div class="text-body1" :class="{'q-px-xs-xl ':innerWidth < 600}">
                      <span>บทเรียนเสริมคำศัพท์ให้กับน้องๆ ที่มีคำศัพทมากถึงประมาณ 3,000 คำ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <app-footer></app-footer>
  </q-page>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  components: {
    appFooter
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