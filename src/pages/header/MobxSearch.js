import { makeObservable, observable, action} from "mobx";

class MobxSearch {

  productList = [];
  newState = [];

  constructor() {
    makeObservable(this, {
        productList: observable,
        newState: observable,
        filteredState: action
    });
  }

  filteredState = (word) => {
    console.log([this.newState]);
    this.newState = this.productList.filter((info) => {
        return info.title.toLowerCase().includes(word.toLowerCase())
    })
    if(word == ""){
      this.newState=[]
    }
  }
}

export default new MobxSearch();