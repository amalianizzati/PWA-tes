import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/source';

import '../../component/resto-detail';

const Detail = {
  async render() {
    return `
    <resto-detail></resto-detail>
    
    `;
  },

  async afterRender() {
    const url = UrlParser.parserActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);
  },
};
export default Detail;
