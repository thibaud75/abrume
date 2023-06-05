<template>
  <nav class="nav-about">
    <router-link to="/about/team">L'Equipe</router-link>
    <router-link to="/about/project">Le projet</router-link>
    <router-link to="/about/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavAbout",
};
</script>

<style scoped>
.nav-about {
  padding-top: 0;
  padding-right: 0;
  margin-top: 15px;
}
</style>
