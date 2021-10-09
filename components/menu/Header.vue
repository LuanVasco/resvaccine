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
    <CardsTotalDoses/>
  </header>
</template>

<script>
export default {
 
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