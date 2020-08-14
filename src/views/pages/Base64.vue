<template>
  <mu-container>
    <h1>Base64 解码/编码</h1>
    <mu-text-field
      v-model="before"
      placeholder="这里是要编码的内容！"
      multi-line
      :rows="10"
      :rows-max="10"
      full-width
    ></mu-text-field>
    <mu-button class="mbutton" color="primary" @click="encode">
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>加密
        </mu-button>
    <mu-button class="mbutton" @click="decode">
      <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_up"></mu-icon>解密
    </mu-button>
    
    <mu-text-field
      v-model="after"
      placeholder="这里是要解码的内容！"
      multi-line
      :rows="10"
      :rows-max="10"
      full-width
    ></mu-text-field>
  </mu-container>
</template>

<script>
import {Base64} from 'js-base64'
export default {
  data: function() {
    return {
      before: "",
      after: ""
    };
  },
  methods:{
      encode(){
          this.after=Base64.encode(this.before);
      },
      decode(){
          this.before=Base64.decode(this.after);
      }
  }
};
</script>

<style lang="scss" scoped>

.mbutton{
    margin:0 1em 1em 0;
}
</style>