<template>
  <div class="team">
    <div class="team-photo">
      <img
        src="../../../src/assets/images/contribute/logo.jpg"
        alt="Logo noir de Abrume"
        class="photo"
      />
    </div>
    <div class="team-description">
      <h2>Suivre le projet Abrume</h2>
      <div class="description">
        <p>
          Onsedia volute nos in ellessit, ut endandem reium quae qui unt plabore
          ptaectis asim auda archil magnatur, omnisci minvendit quo eum acculla
          ceperi doluptium sequam dolores sinum quiaturios venia qui quiatis
          venis et anti utatur rem que enihillaut et, si optatur minimet et
          endenim porrum delicab int et volor aut mossincim eatin num si
          doluptae sam, consedi gnihilicabor aut qui dolum consedipsa doluptia
          volupta tiatum rem rererspitem ent pereperum excereic tem expla si
          comnis int vendis am is
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
</style>
