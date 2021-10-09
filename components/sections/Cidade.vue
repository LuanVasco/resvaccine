<template>
  <div class="city my-6">
    <div class="container mx-auto">
      <section class="md:ml-auto md:w-3/4 md:flex">
        <div class="md:flex-1">
          <header>
            <h2 class="md:text-3xl lg:text-5xl font-medium">Ribeirão Preto</h2>
          </header>
          <article class="mt-4">
            <ul>
              <li>
                Doses Aplicadas - 20.000
              </li>
              <li>
                1ª Dose Aplicada - 10.000
              </li>
              <li>
                2ª Dose Aplicada - 8.000
              </li>
              <li>
                Dose de Reforço - 1.200
              </li>
            </ul>
          </article>
        </div>
        <div class="md:flex-1">
          <div 
            v-for="item in menu" 
            :key="item.name"
            class="max-w-xs bg-indigo-500 text-white my-4 text-center rounded-xl"
          >
            <a 
              class="p-4 block lg:text-lg font-medium"
              :href="item.path"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'Fabricantes',
          path: '#fabricantes',
        },
        {
          name: 'Idade Vacinados',
          path: '#idade-vacinados',
        },
        {
          name: 'Grupos Prioritários',
          path: '#grupos-prioritarios',
        },
        {
          name: 'Sexo',
          path: '#sexo',
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.city {
  background-image: url('/vacina.png');
  background-position: -5px center;
  background-repeat: no-repeat;
  height: 50vh;
}
</style>