<template>
  <header class="header-box">
    <nav class="container mx-auto py-6">
      <a href="#">
        <img 
          src="/logo.svg" 
          alt="ResVaccine"
          width="100"
          height="110"
        />
      </a>
    </nav>
    <SectionsBanner/>
    <CardsTotalDoses
      :totalDose="getPrimeiraDose + getSegundaDose + getTerceiraDose"
      :primeiraDose=getPrimeiraDose
      :segundaDose=getSegundaDose
      :terceiraDose=getTerceiraDose
    />
  </header>
</template>

<script>
export default {
 computed: {
    getPrimeiraDose() {
      return this.$store.state.primeira_dose
    },
    getSegundaDose() {
      return this.$store.state.segunda_dose
    },
    getTerceiraDose() {
      return this.$store.state.terceira_dose
    },
 }
}
</script>

<style lang="scss" scoped>
.header-box {
  background-image: linear-gradient(to bottom,  transparent 85%, #fff 85%), url('/banner.jpg');
  background-position-y: 60%;
  background-size: cover;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>