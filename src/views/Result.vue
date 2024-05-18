<!-- Result.vue -->
<template>
  <div class="result">
    <h2 class="text-center p-3">인증성공!</h2>
    <div class="table-responsive p-2">
      <table class="table table-sm table-bordered">
        <thead>
          <th>항목</th>
          <th>내용</th>
        </thead>
        <tbody>
          <tr v-for="(value, key) in this.info" v-bind:key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultPage',
  beforeCreate() {
    //query param으로 온 데이터를 가져옴
    this.info = this.$route.query;
  },
};
</script>
