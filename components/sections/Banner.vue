<template>
  <div class="banner-box container mx-auto text-center flex-1">
    <h1 class="text-4xl font-medium">
      Selecione seu estado e cidade
    </h1>
    <form class="flex w-4/12 mt-6 mx-auto">
      <select class="w-32" name="Estado" id="estado">
        <option value="">UF</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <option value="GO">GO</option>
        <option value="SC">SC</option>
      </select>
      <select class="w-5/6 ml-6" name="Cidades" id="cidades">
        <option value="">Selecione sua cidade</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.banner-box {
  select {
    background-color: transparent;
    border: 3px solid #000;
    border-radius: 1.5rem;
    padding: 12px;
    font-weight: 500;
  }
}
</style>