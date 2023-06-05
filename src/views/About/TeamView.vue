<template>
  <div class="team">
    <div class="team-photo">
      <img
        src="../../../src/assets/images/about/Photo-officielle.jpg"
        alt="Photo de l'équipe"
        class="photo"
      />
    </div>
    <div class="team-description">
      <h2>Gauthier <strong class="last-name">DELVERT</strong></h2>
      <div class="description">
        <p>
          Diplômé de l’école nationale supérieure d’architecture Paris-Malaquais
          en juillet 2020, Gauthier Delvert a travaillé chez Muoto et chez APM
          (Architecture Patrick Mauger).
        </p>
        <p>
          Au cours de ses expériences professionnelles, Gauthier a travaillé sur
          des projets de réhabilitation d’édifices du XXème siècle et sur des
          concours de grandes échelles comme le nouveau Centre Pompidou
          francilien.
        </p>
        <p>
          Scout de France depuis qu’il a huit ans, Gauthier cultive une passion
          pour le campement en itinérance. Fasciné par la géographie et les
          grands espaces, il décide de partir en Asie du Sud-Est pendant six
          mois et de revenir par la route. De retour de cette aventure il décide
          désormais de consacrer ses explorations à la France et l’Europe en
          partant à la rencontre de paysages méconnus.
        </p>
      </div>
      <h2>Raphaël <strong class="last-name">GUILLEMETTE</strong></h2>
      <div class="description">
        <p>
          Diplômé de l’École nationale supérieure d’architecture Paris-Malaquais
          en juillet 2020, Raphaël Guillemette a travaillé chez NP2F et chez
          AAPP (Atelier d’architecture Philippe Prost).
        </p>
        <p>
          Il a participé à différents projets portant sur des problématiques
          liées au patrimoine, comme la réhabilitation de la Monnaie de Paris,
          du casino d’Évian-les-bains et la transformation du quartier des
          bassins à flots de Bordeaux.
        </p>
        <p>
          En parallèle de son activité professionnelle, il se découvre un amour
          pour la randonnée lorsqu’il part pour la première fois en Écosse dans
          les Highlands, où il développe aussi une fascination pour les bothies,
          anciennes bergeries restaurées pour la randonnée. Depuis, il part
          chaque année en France ou en Europe arpenter le territoire avec sa
          tente et son sac à dos.
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
  font-weight: normal;
}

.last-name {
  font-weight: bold !important;
  color: black;
}
.team-description p {
  word-wrap: break-word; /* Ajout de la propriété pour découper le texte */
  text-align: left;
}
</style>
