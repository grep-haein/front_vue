<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PageHeader/> <!-- 헤더 컴포넌트 -->
  <router-view/>  <!-- 페이지 이동이 표시될 곳 -->
  <PageFooter/> <!-- 푸터 컴포넌트 -->
  <LoadingBar :loading="this.$store.state.loadingStatus"></LoadingBar>  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import LoadingBar from '@/views/common/LoadingBar'

export default {
  name: 'App',
  components: {
    // HelloWorld
    PageFooter,
    PageHeader,
    LoadingBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
