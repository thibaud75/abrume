<template>
  <div class="map-container">

    <video v-if="showVideo" ref="videoElement" class="fullscreen-video" autoplay muted>
      <source src="../assets/videos/launchmap.mp4" type="video/mp4" />
    </video>

    <div v-if="!showVideo">
      <!-- Contenu à afficher après la fin de la vidéo -->
      <img :src="currentImage" alt="Map" class="map-image" @mousemove="handleMouseMove" @mousedown="handleMouseDown" @mouseup="handleMouseUp" />
      <div class="altitude-gauge">
        <input
          type="range"
          min="0"
          :max="totalImages"
          step="200"
          v-model="altitude"
          @input="updateImageIndex"
          class="altitude-slider"
        />
        <div class="altitude-label">{{ Math.round(altitude) }}</div>
      </div>
      <div class="logo-container">
        <img src="../assets/Logos/Logo-Abrume-Noir.png" alt="logo Abrume" class="logo" @click="toggleZoom" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showVideo: true,
      altitude: 0,
      imageInterval: 200,
      totalImages: 4600,
      imageIndex: 0,
      zoomed: false,
      dragging: false,
      mouseX: 0,
      mouseY: 0,
      zoomLevel: 1,
      offsetX: 0,
      offsetY: 0,
    };
  }, 
  mounted() {
    this.playVideo();
    this.$refs.videoElement.addEventListener('ended', this.handleVideoEnded);
  },
  computed: {
    currentImage() {
      const imagePath = require(`@/assets/images/excursion/mapRelief/map-${this.imageIndex * 200}-min.jpg`);
      return imagePath.default || imagePath;
    },
  },
  methods: {
  playVideo() {
      const videoElement = this.$refs.videoElement;
      console.log("go")
      videoElement.play().catch((error) => {
        // La lecture automatique a été bloquée, affichez le message d'erreur ou demandez à l'utilisateur de lancer la vidéo manuellement
        console.error('Impossible de lire automatiquement la vidéo :', error);
      });
    }, 
    handleVideoEnded() {
      this.showVideo = false;
    },
    updateImageIndex() {
      this.imageIndex = Math.floor(this.altitude / this.imageInterval);
      this.currentImage = require(`@/assets/images/excursion/mapRelief/map-${this.imageIndex * 200}-min.jpg`).default;
    },
    handleMouseMove(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.mouseX;
        const deltaY = event.clientY - this.mouseY;
        this.offsetX += deltaX;
        this.offsetY += deltaY;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    },
    handleMouseDown(event) {
      if (this.zoomed) {
        this.dragging = true;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    },
    handleMouseUp() {
      this.dragging = false;
    },
    toggleZoom() {
      this.zoomed = !this.zoomed;
      this.zoomLevel = this.zoomed ? 2 : 1;
      this.offsetX = 0;
      this.offsetY = 0;
    },
  },
};
</script>

<style>
.map-container {
  position: relative;
  width: fit-content;
}

.video-container {
  position: relative;
  width: fit-content

}

.fullscreen-video {
  /* width: 100%;
  height: 100%; */
  object-fit: cover;
  max-width: 100%;
  max-height: 88vh;
  width: 100vw;
  display: block;
}

.map-image {
  display: block;
  max-width: 100%;
  max-height: 88vh;
  width: 100vw;
  object-fit: cover;
}

.altitude-gauge {
  position: absolute;
  bottom: 75px;
  left: -60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: rotate(270deg);
}

.altitude-slider {
  width: 200px;
  margin-bottom: 10px;
}

.altitude-label {
  font-size: 14px;
  color: black;
  transform: rotate(90deg);
  margin-top: 10px;
}

.logo-container {
  position: absolute;
  bottom: -25px;
  right: 0;
  margin: 10px;
  width: 100px;
  height: 100px;
}

.logo {
  width: 100px;
  height: auto;
  opacity: 0.5;
}
</style>
