<template>
  <div id="app">
    <navbar/>
    <home />
    <about />
    <skill />
    <contact />
    <copyr/>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import home from './components/Home'
import about from './components/About'
import skill from './components/Skill'
import contact from './components/Contact'
import copyr from './components/Footer'
export default {
  name: 'App',
  
  components: {
    navbar,
    home,
    about,
    skill,
    contact,
    copyr
  }
}
</script>

<style>
*{
  top: 0 ;
  right: 0;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  background:white;
}


</style>
