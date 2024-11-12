<template>
  <div class="container text-center">
    <h2>Tienda 32 Bits</h2>
    <p>Lista de juegos</p>
    <table class="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td class="acciones">
            <button @click="incrementar(juego.codigo, 1)">+</button>
            <button @click="disminuir(juego.codigo, 1)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'MostrarJuegos',
  computed: {
    ...mapState(['juegos']),
  },
  methods: {
    ...mapActions(['getJuegos', 'incrementarStock', 'disminuirStock']),
    incrementar(codigo, cantidad) {
      this.incrementarStock({ codigo, cantidad });
    },
    disminuir(codigo, cantidad) {
      this.disminuirStock({ codigo, cantidad });
    },
  },
  mounted() {
    this.getJuegos();
  },
};
</script>

<style scoped>
table, th, td {
  border: 1px solid;
}
</style>