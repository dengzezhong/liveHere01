<template>
  <div>
    <Search />
    <Tab />
    <Main />
    友邻市集展示区
  </div>
</template>
<script>
import Search from "./index_header";
import Tab from "./index_tab";
import Main from "./index_main";
// import Market from "./index_market";
export default {
  components: {
    Search,
    Tab,
    Main
  }
}
</script>

