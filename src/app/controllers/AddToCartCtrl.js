export default class AppCtrl {
  constructor(uibModal) {
    this.$inject = ['$uibModal'];

    this.data = require('../data.json');
    this.shopCart = [
      { id: 1, quantity: 10 }
    ];
    this.uibModal = uibModal;
  }
  openModal() {
    var modalInstance = this.uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  }
  showCommonQuantity() {
    let quantity = 0;

    this.shopCart.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  }
  showCommonCost() {
    let cost = 0;

    this.shopCart.forEach((item) => {
      cost += item.quantity * (this.data[item.id].price);
    });
    return cost;
  }
  addProductsToCart(id, quantity) {
    let previous;

    previous = this.shopCart.filter(item => item.id !== id);

    if (previous) {
      previous.quantity += quantity;
    } else {
      this.shopCart.push({ id, quantity });
    }
  }
  removeProductsFromCart(id) {
    this.shopCart = this.shopCart.filter(item => item.id !== id);
  }
}
