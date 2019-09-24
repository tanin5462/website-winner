<template>
  <div class="row relative-position">
    <div
      class="col-12 text-grey-8 bg-grey-3 q-pa-md q-py-xl"
      :class="{'text-h6':$q.platform.is.desktop,'text-body1':$q.platform.is.mobile}"
      align="left"
    >
      <div class="q-py-sm">
        <span class="q-pl-md-xl q-pr-md-lg q-pl-sm-md q-pl-xs-xs q-pr-xs-md fas fa-globe"></span>
        <span>{{dataContentFooter.website}}</span>
      </div>
      <div class="q-py-sm">
        <span class="q-pl-md-xl q-pr-md-lg q-pl-sm-md q-pl-xs-xs q-pr-xs-md fas fa-phone-alt"></span>
        <span>{{dataContentFooter.tel}}</span>
      </div>
      <div class="q-py-sm">
        <span class="q-pl-md-xl q-pr-md-lg q-pl-sm-md q-pl-xs-xs q-pr-xs-md fas fa-envelope"></span>
        <span>{{dataContentFooter.email}}</span>
      </div>
      <div class="q-py-sm">
        <span class="q-pl-md-xl q-pr-md-lg q-pl-sm-md q-pl-xs-xs q-pr-xs-md fas fa-map-marker-alt"></span>
        <span>{{dataContentFooter.location}}</span>
      </div>
    </div>
    <div class="text-subtitle text-grey-8 absolute-bottom-right q-pa-sm">v {{appVersion}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataContentFooter: {
        website: "www.winner-english.com",
        tel: "094-5487-764",
        email: "info.winnerenglish@gmail.com",
        location:
          "1673/8 อาคารวิทยุคอมเพล็กซ์ ถนนเพชรบุรีตัดใหม่ แขวงมักกะสัน เขตราชเทวี 10400"
      }
    };
  }
};
</script>