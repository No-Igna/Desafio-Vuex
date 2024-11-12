import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      juegos: []
    };
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;
    },
    updateStock(state, { codigo, cantidad }) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego) {
        juego.stock = String(parseInt(juego.stock) + cantidad);
      }
    }
  },
  actions: {
    async getJuegos({ commit }) {
      try {
        const response = await axios.get('/juegos.json');
        commit("setJuegos", response.data);
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
      }
    },
    incrementarStock({ commit }, { codigo, cantidad }) {
      commit("updateStock", { codigo, cantidad });
    },
    disminuirStock({ commit }, { codigo, cantidad }) {
      commit("updateStock", { codigo, cantidad: -cantidad });
    }
  },
  modules: {

  }

})

export default store