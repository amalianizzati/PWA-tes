/* eslint-disable indent */
import RestaurantSource from '../../data/source';
import '../../component/resto-fav';

const Favorite = {
  async render() {
    return `
    <resto-fav></resto-fav>`;
  },

  async afterRender() {
    const resto = await RestaurantSource.listResto();
    console.log(resto);
  },
};

export default Favorite;
