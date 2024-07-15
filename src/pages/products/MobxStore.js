import { makeObservable, observable, action} from "mobx";

class MobxStore {
  cartList = JSON.parse(localStorage.getItem('cartList'));
  totalPrice = +(localStorage.getItem('totalPrice'));
  totalQuantity = +(localStorage.getItem('totalQuantity'));
  productsList = [];

  constructor() {
    makeObservable(this, {
      cartList: observable,
      totalPrice: observable,
      totalQuantity: observable,
      productsList: observable,
      addToBag: action,
      removeCart: action,
      productMinus: action,
      productPlus: action
    });
  }
  
  addToBag = (product) => {

    this.productsList.push(product);

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
    this.totalPrice.toFixed(2);
    let newTotalPrice = this.totalPrice;
    newTotalPrice += product.price;
    this.totalPrice = newTotalPrice;
    this.totalQuantity +=quantity;

    localStorage.setItem('cartList',JSON.stringify(this.cartList));
    localStorage.setItem('totalPrice', (this.totalPrice).toFixed(2));
    localStorage.setItem('totalQuantity', this.totalQuantity);
  }

  productMinus = (product) => {
    let id = product.id;
    let price = 0;
    this.productsList.map((product) => {
      if(id === product.id){
        price = +product.price;
      }
    })
    
    if(this.cartList.some(item => item.id === id)){
      let newCartList = this.cartList.map((product) => {
        if(product.id === id){
          product.quantity--;
          if(product.quantity <= 0){
            product.quantity++;
          }
          let newPrice = +product.quantity * price;
          product.price = newPrice.toFixed(2)
          this.totalQuantity--;
          if(this.totalQuantity <= 0){
            this.totalQuantity = 1;
          }
        }
        return product;
      });
      this.cartList = newCartList;
    }

    this.totalPrice = this.totalPrice - price;
    if(this.totalPrice <= 0){
      this.totalPrice = price;
    }
    

    console.log(price);

    localStorage.setItem('totalPrice', (this.totalPrice).toFixed(2));
    localStorage.setItem('cartList',JSON.stringify(this.cartList));
    localStorage.setItem('totalQuantity', this.totalQuantity);
  }

  productPlus = (product) => {

    let id = product.id;
    let price = 0;
    this.productsList.map((product) => {
      if(id === product.id){
        price = +product.price;
      }
    })

    if(this.cartList.some(item => item.id === id)){
      let newCartList = this.cartList.map((product) => {
        if(product.id === id){
          product.quantity++;
          let newPrice = +product.quantity * price;
          product.price = newPrice.toFixed(2)
          this.totalQuantity++;
        }
        return product;
      });
      this.cartList = newCartList;
    }

    this.totalPrice = this.totalPrice + price;

    localStorage.setItem('totalPrice', (this.totalPrice).toFixed(2));
    localStorage.setItem('cartList',JSON.stringify(this.cartList));
    localStorage.setItem('totalQuantity', this.totalQuantity);
  }

  removeCart = (product) => {
    this.totalPrice.toFixed(2);
    let quantity = product.quantity;
    let id = product.id;
    let price = +product.price;
    let newCartList = this.cartList.filter((product) => product.id !== id);
    this.cartList = newCartList
    let newTotalPrice = this.totalPrice.toFixed(2) - price.toFixed(2);
    let newTotalQuantity = this.totalQuantity - quantity;
    this.totalPrice = +newTotalPrice;
    this.totalQuantity = newTotalQuantity;

    localStorage.setItem('cartList',JSON.stringify(this.cartList));
    localStorage.setItem('totalPrice', (this.totalPrice).toFixed(2));
    localStorage.setItem('totalQuantity', this.totalQuantity);
  }

}

export default new MobxStore();