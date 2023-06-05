<template>
  <nav class="nav-contribute">
    <router-link to="/contribute/member">Devenir membre</router-link>
    <router-link to="/contribute/donate">Faire un don</router-link>
    <router-link to="/contribute/newsletter">Newsletter</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavContribute",
};
</script>

<style scoped>
.nav-contribute {
  padding-top: 0;
  padding-right: 0;
  margin-top: 15px;
}
</style>
