<template>
  <div class="video-container">
    <video class="fullscreen-video" autoplay muted>
      <source src="../../src/assets/videos/introcut3.webm" type="video/webm" />
    </video>
    <button class="go-to-abrume" @click="skipToIndex">Aller sur Abrume</button>
    <!-- Bouton invisible à l'emplacement du logo "A" -->
    <button
      v-show="showEndButton"
      class="invisible-button"
      @click="redirectToIndex"
    ></button>
    <a
      v-show="showInstagramLink"
      class="instagram-link"
      href="https://www.instagram.com/_abrume/"
      target="_blank"
    ></a>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      showEndButton: false,
      showInstagramLink: false,
    };
  },
  mounted() {
    const videoElement = document.querySelector(".fullscreen-video");
    videoElement.addEventListener("ended", this.handleVideoEnded);
  },
  methods: {
    skipToIndex() {
      this.$router.push("/index");
    },
    redirectToIndex() {
      window.location.href = "/index";
    },
    handleVideoEnded() {
      this.showEndButton = true;
      this.showInstagramLink = true;
    },
  },
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.go-to-abrume {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
  font-weight: bold;
  font-family: "PingFang", sans-serif;
  border: none;
  border-radius: 4px;
  z-index: 10;
}

.invisible-button {
  cursor: pointer;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 100px;
  height: 100px;
}

.instagram-link {
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 35px;
  background-size: cover;
  /* Ajoutez d'autres styles nécessaires pour le lien Instagram */
}
</style>
