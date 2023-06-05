<template>
  <div class="team">
    <div class="team-photo">
      <img
        src="../../../src/assets/images/about/travail.jpg"
        alt="Photo de l'équipe"
        class="photo"
      />
    </div>
    <div class="team-description">
      <h2>Association Abrume</h2>
      <div class="description">
        <p>
          108 rue des maraîchers<br />
          75020 Paris<br />
          France
        </p>

        <p>
          Raphaël Guillemette<br />
          tel : 0625445061
        </p>

        <p>
          Gauthier Delvert<br />
          tel : 0643442580
        </p>
        <p>
          mail:
          <a href="mailto:abrume.projet@gmail.com">abrume.projet@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // JavaScript code of the component
};
</script>

<style scoped>
.team {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 85%;
}

.team-photo {
  flex: 0 0 40%;
  margin-right: 20px;
}

.team-photo .photo {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.team-description {
  flex: 0 0 60%;
  text-align: justify;
  align-self: flex-start;
}

.team-description .description,
h2 {
  margin-left: 100px;
}

h2 {
  font-size: 1.2em;
  color: black;
}

.team-description p {
  word-wrap: break-word; /* Ajout de la propriété pour découper le texte */
  text-align: left;
}

.team-description p a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
