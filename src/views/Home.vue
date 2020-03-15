<template>
  <mu-container>
      <h1>借物参考:</h1>
      <mu-chip v-for="item in items" :key="item.name" >
        <a :href="item.url">{{item.name}}</a>
      </mu-chip>
  </mu-container>
</template>
<script>
export default {
  data(){
    return{
      items:[
        {name:'codemirror',url:'https://www.npmjs.com/package/codemirror'},
        {name:'minimize',url:'https://www.npmjs.com/package/minimize'},
        {name:'js-base64',url:'https://www.npmjs.com/package/js-base64'}
      ]
    }
  },

}
</script>