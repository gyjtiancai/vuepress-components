<template>
  <div class="start">
    <h2>在项目入口文件main.js引入</h2>
    <code>
      <span class="token keyword">import</span>
      yiyunComponents
      <span class="token keyword">from</span>
      library_component
      <span class="token punctuation">;</span>
    </code>
    <h2>并注册</h2>
    <code>Vue.use(yiyunComponents)</code>
  </div>
</template>

<script>
export default {
  name: "start",
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>