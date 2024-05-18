<!-- Home.vue -->
<template>
  <div class="home">
    <h2 class="text-center p-3">본인인증</h2>
    <button @click="checkIdentity" class="btn btn-sm btn-primary mt-5">
      본인인증
    </button>
    <!-- nice 서버에 submit할 form -->
    <form name="form" id="form">
      <!-- <input type="hidden" name="m" value="checkplusService" /> -->
      <input type="hidden" id="m" name="m" value="service" />
      <input
        type="hidden"
        id="token_version_id"
        name="token_version_id"
        value=""
      />
      <input type="hidden" id="enc_data" name="enc_data" value="" />
      <input
        type="hidden"
        id="integrity_value"
        name="integrity_value"
        value=""
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    checkIdentity() {
      //인증 후 callback URL
      let returnUrl = `${this.serverHost}/crypto/token?returnUrl=http://localhost:3000/callback`;

      this.$axios({
        url: `${returnUrl}`,
        method: 'GET',
        // params: { returnUrl, redirectUrl },
        // withCredentials: true,
      })
        .then((res) => {
          let encodeData = res.data._encData;
          let tokenVersionId = res.data._tokenVersionId;
          let integrityValue = res.data._integrityValue;

          document.form.action =
            'https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb';
          document.form.enc_data.value = encodeData;
          document.form.token_version_id.value = tokenVersionId;
          document.form.integrity_value.value = integrityValue;

          //submit! (본인인증 화면으로 전환)
          document.form.submit();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
