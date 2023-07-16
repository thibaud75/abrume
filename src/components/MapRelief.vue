<template>
  <div class="map-container">
    <div>
      <!-- Contenu à afficher après la fin de la vidéo -->
      <img :src="currentImage" alt="Map" class="map-image" @mousemove="handleMouseMove" @mousedown="handleMouseDown" @mouseup="handleMouseUp" />
      <div class="altitude-gauge">
        <input
          type="range"
          min="0"
          :max="totalImages"
          step="200"
          v-model="altitude"
          @input="updateImageDebounced"
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
import { debounce } from 'lodash';

export default {
  data() {
    return {
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
      animationProgress: 0,
      animationDuration: 4000, // 4 secondes
      animationInterval: null,
    };
  },
  mounted() {
    this.startAnimation();
  },
  computed: {
    currentImage() {
      const imagePath = require(`@/assets/images/excursion/mapRelief/map-${this.imageIndex * 200}-min.jpg`);
      return imagePath.default || imagePath;
    },
  },
  methods: {
    updateImageDebounced: debounce(function() {
      this.imageIndex = Math.floor(this.altitude / this.imageInterval);
    }, 100),

    startAnimation() {
      const targetValue = this.totalImages;
      // const interval = this.animationDuration / targetValue;

      let currentAltitude = 0;
      this.animationInterval = setInterval(() => {
        currentAltitude = currentAltitude + 20;
        if (currentAltitude > targetValue) {
          clearInterval(this.animationInterval);
        } else {
          this.altitude = currentAltitude;
          this.imageIndex = Math.floor(this.altitude / this.imageInterval);
        }
      }, 1);
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

.map-image {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: 100vw;
  height: 100vh;
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
  height: 2px; /* Hauteur de la jauge */
  margin-bottom: 10px;
  background-color: #ccc; /* Couleur de fond de la jauge */
  border-radius: 4px; /* Bordure arrondie de la jauge */
  outline: none; /* Supprime le contour par défaut de la jauge */
  -webkit-appearance: none; /* Supprime les styles par défaut de l'élément */
}

/* Style de la jauge lorsque la souris est dessus */
.altitude-slider:hover {
  background-color: #ddd; /* Couleur de fond de la jauge au survol */
}

/* Style de la jauge lorsqu'elle est active (en cours de manipulation) */
.altitude-slider:active,
.altitude-slider:focus {
  background-color: #aaa; /* Couleur de fond de la jauge lors de l'interaction */
}

/* Style de la poignée de la jauge */
.altitude-slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Supprime les styles par défaut de la poignée */
  appearance: none;
  width: 8px; /* Largeur de la poignée */
  height: 8px; /* Hauteur de la poignée */
  border-radius: 50%; /* Forme arrondie de la poignée */
  background-color: white;
  border: 1px solid #333;;
  cursor: pointer;
}

/* Style de la poignée de la jauge lorsqu'elle est survolée */
.altitude-slider::-webkit-slider-thumb:hover {
  background-color: #666; /* Couleur de la poignée au survol */
}

/* Style de la poignée de la jauge lorsqu'elle est active (en cours de manipulation) */
.altitude-slider::-webkit-slider-thumb:active {
  background-color: #000; /* Couleur de la poignée lors de l'interaction */
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
