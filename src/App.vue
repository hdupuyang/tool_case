<template>
  <div>
    <!-- 导航 -->
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-button flat slot="left" to="/">
        <h1>GQQQ的工具箱</h1>
      </mu-button>

      <mu-menu open-on-hover slot="right">
        <mu-button flat>
          <mu-icon value="color_lens"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="changeTheme('light')">
            <mu-list-item-content>
              <mu-list-item-title>light</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button @click="changeTheme('dark')">
            <mu-list-item-content>
              <mu-list-item-title>dark</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>

    <!--组件-->
    <router-view></router-view>

    <!-- 边栏 -->
    <mu-container>
      <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
        <mu-list toggle-nested>
          <!-- 全部收起栏 -->
          <mu-list-item button @click="reverse()">
            <mu-list-item-action>
              <mu-icon value="attach_file"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>全部收起</mu-list-item-title>
          </mu-list-item>

          <!-- 工具栏 -->

          <mu-list-item
            button
            nested
            :open="openlist1 === true"
            @toggle-nested="openlist1 = arguments[0] ? true : false"
          >
            <mu-list-item-action>
              <mu-icon value="send"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>工具</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon
                class="toggle-icon"
                size="24"
                :value="openlist1?'keyboard_arrow_down':'keyboard_arrow_up'"
              ></mu-icon>
            </mu-list-item-action>
            <mu-list-item button slot="nested" to="/resize">
              <mu-list-item-title>Resize</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button slot="nested" to="/qrcode">
              <mu-list-item-title>二维码</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button slot="nested">
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>

          <!--代码压缩-->

          <mu-list-item
            button
            nested
            :open="openlist3 === true"
            @toggle-nested="openlist3 = arguments[0] ? true : false"
          >
            <mu-list-item-action>
              <mu-icon value="send"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>代码压缩</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon
                class="toggle-icon"
                size="24"
                :value="openlist1?'keyboard_arrow_down':'keyboard_arrow_up'"
              ></mu-icon>
            </mu-list-item-action>
            <mu-list-item button slot="nested" to="/htmlminify">
              <mu-list-item-title>HTML</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button slot="nested">
              <mu-list-item-title>CSS</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button slot="nested">
              <mu-list-item-title>JS</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>

          <!--编码解码-->
          <mu-list-item
            button
            nested
            :open="openlist2 === true"
            @toggle-nested="openlist2 = arguments[0] ? true : false"
          >
            <mu-list-item-action>
              <mu-icon value="vpn_key"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>编码/解码</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon
                class="toggle-icon"
                size="24"
                :value="openlist2?'keyboard_arrow_down':'keyboard_arrow_up'"
              ></mu-icon>
            </mu-list-item-action>
            <mu-list-item button slot="nested" to="/base64">
              <mu-list-item-title>Base64</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button slot="nested">
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </mu-container>
  </div>
</template>
<script>
import theme from "muse-ui/lib/theme";
export default {
  data() {
    return {
      docked: false,
      open: false, //默认是否打开
      position: "left",
      openlist1: true,
      openlist2: true,
      openlist3:true,
    };
  },
  methods: {
    changeTheme(str) {
      //切换theme
      theme.use(str);
    },
    reverse() {
      //收起全部
      this.openlist3 =this.openlist2 = this.openlist1 = false;
    }
  }
};
</script>
<style>
h1 {
  font-weight: 400;
}
</style>
