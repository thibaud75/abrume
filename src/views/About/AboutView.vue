<template>
  <NavAbout />
  <router-view></router-view>
</template>

<script>
import NavAbout from "../../components/NavAbout.vue";

export default {
  name: "AboutView",
  components: {
    NavAbout,
  },
  created() {
    if (this.$route.path === "/about") {
      this.$router.push("/about/team");
    }
  },
};
</script>

<style scoped></style>
