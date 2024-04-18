import { makeObservable, observable, action} from "mobx";

class MobxCartpage {
  cartList = JSON.parse(localStorage.getItem('cartList'))
  totalPrice = +(localStorage.getItem('totalPrice'))

  constructor() {
    makeObservable(this, {
      cartList: observable,
      totalPrice: observable,
      removeCart: action
    })
  }

    removeCart = (product) => {
        let id = product.id;
        let price = +product.price;

        let newCartList = this.cartList.filter((product) => product.id !== id);

        this.cartList = newCartList

        let newTotalPrice = this.totalPrice - price.toFixed(2);

        this.totalPrice = newTotalPrice.toFixed(2)

        localStorage.setItem('cartList',JSON.stringify(this.cartList));
        localStorage.setItem('totalPrice', this.totalPrice);
    }
}

export default new MobxCartpage();