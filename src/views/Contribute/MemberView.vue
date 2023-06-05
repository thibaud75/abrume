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
      <h2>Participer <span>au repérage</span> des abrumes</h2>
      <div class="description">
        <p>
          Versperios magnat es sam, suntibus etur alique dem. Aspelib eresenis
          et quate et qui atus as nobitiis destrum faciunt. Non plibus vende
          vendernat alis et doluptur reperiae duciatur adipsum anisciatur? Qui
          optaecabo. Gitem ut posam as as vel molor accabo. Neque nos
          maiorporepra que con ea volumque sitaqui odiae omnit, explit faccum
          fugit ad ute volorrum ipsus. Nem in conecum nobis et, archicabo. Nam
          quassin core conseque dollorro volo illabo. Itaquam reperia quo
          venimaximus que velesti onsequod qui omnisit ibusam quate evellab idit
          officiatur moditin nonsecus dus et prorro inullandita parum velique
          conet raeptam nosam nis que dolentiae lique vellaut essit untesequat
          quaecte everferum ea iuntessinti bla volorum aut que nat quo quae
          illaborem naturia debis et am rem alignis inullia pro dolupti dia
          voluptae res autem eaquatibus nuste nes sit la comniet fugitiis essit
          qui doluptatis sunt quaturi doluptatur?
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
  font-weight: normal;
}

span {
  font-weight: bold;
}
.team-description p {
  word-wrap: break-word; /* Ajout de la propriété pour découper le texte */
  text-align: left;
}
</style>
