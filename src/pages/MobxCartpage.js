import { makeObservable, observable, action} from "mobx";

class MobxCartpage {
  cartList = JSON.parse(localStorage.getItem('cartList'))
  totalPrice = +(localStorage.getItem('totalPrice'))
  totalQuantity = +(localStorage.getItem('totalQuantity'))

  constructor() {
    makeObservable(this, {
      cartList: observable,
      totalPrice: observable,
      totalQuantity: observable,
      removeCart: action
    });
  }

  removeCart = (product) => {
      let quantity = product.quantity;
      let id = product.id;
      let price = +product.price;
      let newCartList = this.cartList.filter((product) => product.id !== id);
      this.cartList = newCartList
      let newTotalPrice = this.totalPrice - price.toFixed(2);
      let newTotalQuantity = this.totalQuantity - quantity;
      this.totalPrice = newTotalPrice.toFixed(2);
      this.totalQuantity = newTotalQuantity;
      localStorage.setItem('cartList',JSON.stringify(this.cartList));
      localStorage.setItem('totalPrice', this.totalPrice);
      localStorage.setItem('totalQuantity', this.totalQuantity);
    }
}

export default new MobxCartpage();