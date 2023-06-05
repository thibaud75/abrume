<template>
  <NavContribute />
  <router-view></router-view>
</template>

<script>
import NavContribute from "../../components/NavContribute.vue";

export default {
  name: "ContributeView",
  components: {
    NavContribute,
  },
  created() {
    if (this.$route.path === "/contribute") {
      this.$router.push("/contribute/member");
    }
  },
};
</script>

<style scoped></style>
