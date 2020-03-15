<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <mu-container>
    <h1>HTML</h1>
    <mu-paper :z-depth="6">
    <codemirror
      ref="myCm"
      :value="code"
      :options="cmOptions"
      @input="onCmCodeChange"
    ></codemirror>
    </mu-paper>
    <mu-button color="primary" @click="htmlMinimize()">压缩
    </mu-button>

  </mu-container>
</template>
 
<script>
// language js
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/idea.css";
import Minimize from 'minimize'
export default {
  data() {
    return {
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/htmlmixed",
        theme: "idea",
        lineNumbers: true,
        line: true
        
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    },
    htmlMinimize(){
      this.code = new Minimize().parse(this.code);
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  },
  mounted() {
    console.log("this is current codemirror object", this.codemirror);
    // you can use this.codemirror to do something...
  }
};
</script>