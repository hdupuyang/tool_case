<template>
  <mu-container>
    <mu-text-field v-model="str"></mu-text-field>
    <mu-button color="primary" @click="handle">生成二维码</mu-button>
    <br/>
    <canvas ref="can"></canvas>
  </mu-container>
</template>

<script>
import QRCode from "qrcode";
export default {
  data(){
    return {
      str:""
    }
  },
  created() {
    console.log(QRCode)
    
    QRCode.toDataURL("I am a pony!")
      .then((url) => {
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  mounted(){
      QRCode.toCanvas(this.$refs.can,"初始化",(error)=>{
        if(error)console.error(error)
        console.log("success")
    })
  },
  methods:{
    handle(){
      QRCode.toCanvas(this.$refs.can,this.str,(error)=>{
        if(error)console.error(error)
        console.log("success")
    })
    }
  }
};
</script>

