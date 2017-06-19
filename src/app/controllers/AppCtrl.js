class AppCtrl {
  constructor() {
    this.data = require('../data.json');
    // $http.get('data.json')
    //    .then(res => {
    //       this.data = res.data;
    //     });
    this.shopCart = [
      { id: 1, quantity: 3 }
    ];
    this.modalShown = false;
    this.openProduct;
    this.openProductQuantity;
  }
  openCartModal(id) {
    this.modalShown = true;
    this.openProduct = this.data.filter(item => item.id === id)[0];
    this.openProductQuantity = 0;
  }
  hideCartModal() {
    this.modalShown = false;
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
  addProductsToCart() {
    let previous;

    previous = this.shopCart.filter(item => item.id === this.openProduct.id);

    if (previous && previous.length) {
      previous[0].quantity += this.openProductQuantity;
    } else {
      this.shopCart.push({ id: this.openProduct.id, quantity: this.openProductQuantity });
    }
    this.modalShown = false;
    this.openProduct = null;
    this.openProductQuantity = 0;
  }
  removeProductsFromCart(id) {
    this.shopCart = this.shopCart.filter(item => item.id !== id);
  }
}

export default AppCtrl;
