<template>
  <div class="abrume-div">
    <div v-if="$route.path !== '/'" :class="getNavClass" class="abrume-nav">
      <RouterLink to="/index"><h1>abrume</h1></RouterLink>
      <NavAbrume />
    </div>
    <router-view />
  </div>
</template>

<script>
// Import du composant
import NavAbrume from "./components/NavAbrume.vue";

export default {
  components: {
    NavAbrume,
  },
  computed: {
    getNavClass() {
      const routePath = this.$route.path;
      if (
        routePath === "/about/contact" ||
        routePath === "/about/team" ||
        routePath === "/about/project" ||
        routePath === "/contribute/member" ||
        routePath === "/contribute/donate" ||
        routePath === "/contribute/newsletter"
      ) {
        return "all-nav";
      } else {
        return ""; // Par défaut, aucune classe supplémentaire n'est appliquée
      }
    },
  },
  mounted() {
    if (this.$route.path === "/") {
      document.body.classList.add("black-background");
    } else {
      document.body.classList.remove("black-background");
    }
  },
  watch: {
    "$route.path": function (newPath) {
      if (newPath === "/") {
        document.body.classList.add("black-background");
      } else {
        document.body.classList.remove("black-background");
      }
    },
  },
};
</script>

<style>
body {
  background-color: rgb(245, 239, 239);
}

.black-background {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 95%;
  font-family: "PingFang", sans-serif;
}

* {
  box-sizing: border-box;
  /* outline: 1px solid orangered; */
}

@font-face {
  font-family: "PingFang";
  src: url("./assets/fonts/PingFang.ttc") format("truetype");
}

.abrume-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
  border-bottom: 1px solid #2c3e50;
}

.abrume-nav > a {
  text-decoration: none;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: flex-end;
}

nav a {
  font-weight: bold;
  color: #847e96cb;
  text-decoration: none;
  margin: 0 5px;
}

nav a.router-link-exact-active {
  color: black;
}

.abrume-nav.all-nav {
  margin-bottom: 0;
}
</style>
