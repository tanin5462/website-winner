<template>
  <div style="height:calc(100vh - 140px);" class="q-pt-xl q-px-md">
    <transition appear enter-active-class="animated fadeIn">
      <div class="text-h6" style="max-width:800px;width:100%;margin:auto;">
        <q-tabs
          v-model="loginTab"
          inline-label
          align="left"
          class="bg-primary text-white shadow-2"
          style="height:80px;"
          active-bg-color="blue-10"
          indicator-color="blue-10"
        >
          <q-tab style="min-width:200px;width:200px;" name="student">
            <span class="text-h4">
              <span class="fas fa-user-graduate q-pr-sm"></span>
            </span>
            <span class="text-h6">นักเรียน</span>
          </q-tab>
          <q-tab style="min-width:200px;width:200px;" name="teacher">
            <span class="text-h4">
              <span class="fas fa-chalkboard-teacher q-pr-sm"></span>
            </span>
            <span class="text-h6">คุณครู</span>
          </q-tab>
          <q-tab style="min-width:200px;width:200px;" no-caps name="atWork">
            <span class="text-h4">
              <span class="fas fa-hotel q-pr-sm"></span>
            </span>
            <span class="text-h6">@Work</span>
          </q-tab>
        </q-tabs>
      </div>
    </transition>

    <transition appear enter-active-class="animated fadeIn">
      <q-tab-panels
        v-model="loginTab"
        animated
        class="shadow-5"
        transition-next="slide-left"
        transition-prev="slide-right"
        style="max-width:800px;width:100%;margin:auto;"
      >
        <!-- Tab : Student -->
        <q-tab-panel name="student">
          <div class="row" style="height:500px;">
            <div class="col-md-6 col-sm-6 col-xs-12 self-center" v-if="$q.platform.is.desktop">
              <img src="../statics/pic/student.png" style="max-width:400px;width:90%;" alt />
            </div>
            <div
              class="self-center"
              align="center"
              :class="{'col-md-6 col-sm-6 col-xs-12':$q.platform.is.desktop,'col-xs-12':$q.platform.is.mobile}"
            >
              <div>
                <a target="_blank" href="https://mainapp.winner-english.com">
                  <q-btn
                    push
                    class="bg-primary text-white q-py-md q-mt-lg"
                    style="width:250px;"
                    size="md"
                  >
                    <span class="text-h6">บทเรียน</span>
                  </q-btn>
                </a>
              </div>
              <div>
                <a target="_blank" href="https://exam.winner-english.com">
                  <q-btn
                    push
                    class="bg-primary text-white q-py-md q-my-lg"
                    style="width:250px;"
                    no-caps
                    size="md"
                  >
                    <span class="text-h6">Pre-test / Post-test</span>
                  </q-btn>
                </a>
              </div>
              <div>
                <a target="_blank" href="https://placement.winner-english.com">
                  <q-btn
                    push
                    class="bg-primary text-white q-py-md q-mb-lg"
                    style="width:250px;"
                    size="md"
                  >
                    <span class="text-h6">สอบวัดระดับ</span>
                  </q-btn>
                </a>
              </div>
              <div>
                <a target="_blank" href="https://questionnaire.winner-english.com">
                  <q-btn
                    push
                    class="bg-primary text-white q-py-md q-mb-lg"
                    style="width:250px;"
                    size="md"
                  >
                    <span class="text-h6">ประเมินความพึงพอใจ</span>
                  </q-btn>
                </a>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!-- Tab : Teacher -->
        <q-tab-panel name="teacher">
          <div class="row" style="height:500px;">
            <div class="col-md-6 col-xs-12 self-center" v-if="$q.platform.is.desktop">
              <img src="../statics/pic/teacher.png" style="max-width:450px;width:90%;" alt />
            </div>
            <div
              class="self-center"
              align="center"
              :class="{'col-md-6 col-xs-12':$q.platform.is.desktop,'col-xs-12':$q.platform.is.mobile}"
            >
              <div>
                <a target="_blank" href="https://tas.winner-english.com">
                  <q-btn
                    push
                    class="bg-primary text-white q-py-md q-my-lg"
                    style="width:250px;"
                    size="md"
                  >
                    <span class="text-h6">ระบบผู้ช่วยครู</span>
                  </q-btn>
                </a>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!-- Tab : Atwork -->
        <q-tab-panel name="atWork">
          <div class="row" style="height:500px;">
            <div class="col-md-6 col-xs-12 self-center" v-if="$q.platform.is.desktop">
              <img src="../statics/pic/hotel.png" style="max-width:450px;width:90%;" alt />
            </div>
            <div
              class="self-center"
              align="center"
              :class="{'col-md-6 col-xs-12':$q.platform.is.desktop,'col-xs-12':$q.platform.is.mobile}"
            >
              <div>
                <a target="_blank" href="https://atwork.winner-english.com">
                  <q-btn
                    push
                    class="bg-primary text-white q-py-md q-my-lg"
                    style="width:250px;"
                    size="md"
                  >
                    <span class="text-h6">เข้าสู่ระบบ @atWork</span>
                  </q-btn>
                </a>
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginTab: "student"
    };
  }
};
</script>