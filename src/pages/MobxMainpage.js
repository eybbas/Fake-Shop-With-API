import { makeObservable, observable, action} from "mobx";

class MobxMainpage {
  cartList = JSON.parse(localStorage.getItem('cartList'))
  totalPrice = +(localStorage.getItem('totalPrice'))
  totalQuantity = +(localStorage.getItem('totalQuantity'))

  constructor() {
    makeObservable(this, {
      cartList: observable,
      totalPrice: observable,
      totalQuantity: observable,
      addToBag: action
    });
  }
  
  addToBag = (product) => {

    let quantity = 1;
    let price = +product.price;
    let id = product.id
    if(this.cartList.some(item => item.id === id)){
      let newCartList = this.cartList.map((product) => {
        if(product.id === id){
          let newPrice = +product.price;
          newPrice+=price;
          product.price=newPrice.toFixed(2);
          product.quantity++;

        }
        return product
      })
      this.cartList = newCartList
    }else{
      this.cartList.push({...product, quantity: quantity})
    }
    let newTotalPrice = this.totalPrice;
    newTotalPrice += product.price;
    this.totalPrice = newTotalPrice;
    this.totalQuantity +=quantity;
    console.log(this.totalQuantity);
    

    localStorage.setItem('cartList',JSON.stringify(this.cartList));
    localStorage.setItem('totalPrice', this.totalPrice.toFixed(2));
    localStorage.setItem('totalQuantity', this.totalQuantity);
  }
}

export default new MobxMainpage();