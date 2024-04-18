import { makeObservable, observable, action} from "mobx";

class MobxMainpage {
  cartList = JSON.parse(localStorage.getItem('cartList'))
  totalPrice = +(localStorage.getItem('totalPrice'))

  constructor() {
    makeObservable(this, {
      cartList: observable,
      totalPrice: observable,
      addToBag: action
    })
  }
  
  addToBag = (product) => {

    let quantity = 1;
    let price = +product.price;
    let id = product.id
    if(this.cartList.some(item => item.id === id)){
      let newCartList = this.cartList.map((product) => {
        if(product.id === id){
          let newPrice = +product.price
          newPrice+=price;
          console.log(typeof product.price);
          product.price=newPrice.toFixed(2)
          product.quantity++;
        }
        return product
      })
      this.cartList = newCartList
    }else{
      this.cartList.push({...product, quantity: quantity})
    }
    let newTotalPrice = this.totalPrice;
    newTotalPrice +=product.price
    this.totalPrice = newTotalPrice

    localStorage.setItem('cartList',JSON.stringify(this.cartList));
    localStorage.setItem('totalPrice', this.totalPrice.toFixed(2));
  }
}

export default new MobxMainpage();