<template>
  <div id="nav">
    <router-link id="home-page" to="/">Home</router-link> |
    <router-link id="find-xyz-page" to="/FindXYZ">FindXYZ</router-link> |
    <router-link id="find-bc-page" to="/FindBC">FindBC</router-link> |
    <router-link id="getroit-page" to="/Getroute">Getroute</router-link> |
    <router-link id="about-page" to="/about">About me</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
