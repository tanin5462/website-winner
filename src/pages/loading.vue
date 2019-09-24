<template>
  <div class="absolute-center">
    <div>
      <q-circular-progress
        indeterminate
        size="70px"
        :thickness="0.22"
        color="primary"
        track-color="grey-3"
        class="q-ma-md"
      />
      <br />
      <span>กรุณารอสักครู่...</span>
    </div>
  </div>
</template>

<script>
import { db } from "../router/index.js";
export default {
  data() {
    return {};
  },
  methods: {
    checkVersion() {
      db.collection("version")
        .doc("website")
        .get()
        .then(doc => {
          if (doc.data().version != this.appVersion) {
            window.location.reload(true);
          } else {
            this.$router.push("/");
          }
        });
    }
  },
  mounted() {
    this.checkVersion();
  }
};
</script>