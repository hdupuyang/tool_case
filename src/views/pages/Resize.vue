<template>
  <mu-container class="demo-content-block" v-resize="resize">
    <p style="margin-right: 16px;">Window Size:</p>
    <p>height: {{height}}px width:<mu-text-field  v-model="width" label-float></mu-text-field>px </p>
  </mu-container>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
  methods: {
    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  }
};
</script>

<style scoped>
.demo-content-block {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>