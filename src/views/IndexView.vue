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

    <div class="scrollable">
      <div class="image-grid" ref="imageGrid">
        <div class="columns-container">
          <div v-for="(column, index) in columns" :key="index" class="column">
            <div
              v-for="(image, imageIndex) in column"
              :key="imageIndex"
              class="image-container"
            >
              <img
                :src="require(`@/assets/images/home/${image}`)"
                alt="Image"
                class="image"
              />
            </div>
          </div>
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
        // Liste des noms de fichier des images
        // Les images sont affichées en colonne de deux
        // Si vous voulez changer les images, les premières sont les premières de la colonne
        "abrimoitie.png",
        "cabaneloin.jpg",
        "abrinoir.png",
        "abriarbre.jpg",
        "bgabrume.jpg",
        "boissombre.jpg",
        "boislac.jpg",
        "abriblanc.png",
        "vosges1.jpg",
        "vosges2.jpg",
        "vosges3.jpg",
        "vosges4.jpg",
        "vosges5.jpg",
        "boissombre.jpg",
        "abrimoitie.png",
        "cabaneloin.jpg",
        "abrinoir.png",
        "abriarbre.jpg",
        "bgabrume.jpg",
        "boissombre.jpg",
        "abrimoitie.png",
        "cabaneloin.jpg",
        "abrinoir.png",
        "abriarbre.jpg",
        "bgabrume.jpg",
        "boissombre.jpg",
        "abrimoitie.png",
        "cabaneloin.jpg",
        "abrinoir.png",
        "abriarbre.jpg",
        "bgabrume.jpg",
        "boissombre.jpg",
        // Ajoutez vos autres images ici
      ],
      columns: [],
      imagesPerColumn: 6,
    };
  },
  mounted() {
    this.generateColumns(this.images, this.imagesPerColumn);
  },
  methods: {
    generateColumns(images, imagesPerColumn) {
      const columns = [];
      let currentColumn = [];
      let columnIndex = 0;

      for (let i = 0; i < images.length; i++) {
        currentColumn.push(images[i]);

        if (currentColumn.length === imagesPerColumn) {
          columns.push(currentColumn);
          currentColumn = [];
          columnIndex++;
        }
      }

      if (currentColumn.length > 0) {
        columns.push(currentColumn);
        columnIndex++;
      }

      // Remplir les colonnes restantes avec des tableaux vides
      while (columnIndex < 4) {
        columns.push([]);
        columnIndex++;
      }

      this.columns = columns;
    },

    scrollLeft() {
      this.scrollWithAnimationHorizontal(-400, 0, this.$refs.imageGrid);
    },
    scrollRight() {
      this.scrollWithAnimationHorizontal(400, 0, this.$refs.imageGrid);
    },
    scrollDown() {
      this.scrollWithAnimationVertical(0, 600);
    },

    scrollWithAnimationVertical(dx, dy) {
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
    scrollWithAnimationHorizontal(dx, dy, target) {
      const duration = 1000; // Durée de l'animation en millisecondes
      const startTime = performance.now();
      const startX = target.scrollLeft;
      const startY = target.scrollTop;

      const animateScroll = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = this.easeInOutQuad(progress);
        const currentX = startX + dx * easeProgress;
        const currentY = startY + dy * easeProgress;

        target.scroll(currentX, currentY);

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
  height: auto;
  overflow-y: auto;
}

.image-grid {
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; /* Empêche le retour à la ligne des colonnes */
}

.columns-container {
  display: inline-flex; /* Affiche les colonnes en ligne */
}
.column {
  flex: 0 0 25%; /* Chaque colonne occupe 25% de l'espace */
  margin-right: 10px;
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
