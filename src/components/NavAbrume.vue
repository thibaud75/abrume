<template>
  <nav>
    <router-link to="/inventory">Inventaire</router-link>
    <router-link to="/excursion">Excursion</router-link>
    <router-link :to="{ name: 'team' }" :class="{ active: isAboutActive }"
      >A propos</router-link
    >
    <router-link
      :to="{ name: 'member' }"
      :class="{ active: isContributeActive }"
      >Participer</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavAbrume",
  props: {
    msg: String,
  },
  computed: {
    isAboutActive() {
      return this.$route.path.startsWith("/about");
    },
    isContributeActive() {
      return this.$route.path.startsWith("/contribute");
    },
  },
};
</script>

<style scoped>
.active {
  color: black;
}
nav {
  font-size: 20px;
}
</style>
