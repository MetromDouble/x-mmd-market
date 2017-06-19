import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../style/app.css';

import app from './directives/app.js';
import modalDialog from './directives/modalDialog.js';

import AppCtrl from './controllers/AppCtrl.js';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [uiRouter])
  .config(function($stateProvider) {
    const phoneList = {
      name: 'phoneList',
      url: '/',
      template: require('./partials/cards.html')
    }

    const shopCart = {
      name: 'shopCart',
      url: '/cart',
      template: require('./partials/shop-cart.html')
    }

    $stateProvider.state(phoneList);
    $stateProvider.state(shopCart);
  })
  .directive('app', app)
  .directive('modalDialog', modalDialog)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
