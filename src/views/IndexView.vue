<template>
  <div class="home">
    <div class="arrows-container">
      <div class="arrow-container left-arrow-container">
        <button @click="scrollLeft" class="arrow left-arrow"></button>
      </div>
      <div class="arrow-container bottom-arrow-container">
        <button @click="scrollDown" class="arrow down-arrow"></button>
      </div>
      <div class="arrow-container right-arrow-container">
        <button @click="scrollRight" class="arrow right-arrow"></button>
      </div>
    </div>

    <div class="image-grid">
      <div v-for="(column, index) in columns" :key="index" class="column">
        <div v-for="image in column" :key="image" class="image-container">
          <img
            :src="require(`@/assets/images/home/${image}`)"
            alt="Image"
            class="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        // List of image filenames
        // Les images sont affichées en colonne de deux
        // Si tu veux changer les images, les premières sont les premières de la colonne

        "abrimoitie.png",
        "cabaneloin.jpg",
        "abrinoir.png",
        "abriarbre.jpg",
        "bgabrume.jpg",
        "boissombre.jpg",
        "boislac.jpg",
        "abriblanc.png",
      ],
      columns: [],
    };
  },
  mounted() {
    this.columns = this.generateColumns(this.images, 4);
  },
  methods: {
    generateColumns(images, numColumns) {
      const columns = [];
      let columnIndex = 0;

      for (let i = 0; i < images.length; i++) {
        if (!columns[columnIndex]) {
          columns[columnIndex] = [];
        }

        columns[columnIndex].push(images[i]);
        columnIndex = (columnIndex + 1) % numColumns;
      }

      return columns;
    },
    scrollLeft() {
      this.scrollWithAnimation(-100, 0);
    },
    scrollRight() {
      this.scrollWithAnimation(100, 0);
    },
    scrollDown() {
      this.scrollWithAnimation(0, window.innerHeight - 100);
    },
    scrollWithAnimation(dx, dy) {
      const startX = window.scrollX;
      const startY = window.scrollY;
      const targetX = startX + dx;
      const targetY = startY + dy;
      const duration = 1000; // Durée de l'animation en millisecondes
      const startTime = performance.now();

      const animateScroll = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = this.easeInOutQuad(progress);
        const currentX = startX + easeProgress * (targetX - startX);
        const currentY = startY + easeProgress * (targetY - startY);

        window.scrollTo(currentX, currentY);

        if (elapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-grid {
  display: flex;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.image-container {
  margin: 10px;
}

img {
  width: 100%;
  height: auto;
}

.arrows-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 2;
}

.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
}

.arrow {
  width: 60px;
  height: 40px;
  background-size: 60px !important;
  background-image: url("../../src/assets/images/home/fleche.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.left-arrow {
  transform: rotate(180deg);
}

.right-arrow {
  transform: rotate(0deg);
}

.down-arrow {
  transform: rotate(90deg);
}

.left-arrow-container {
  left: 10px;
}

.right-arrow-container {
  right: 10px;
}

.bottom-arrow-container {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>
