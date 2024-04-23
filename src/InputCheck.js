import { makeObservable, observable, action } from "mobx";
import { createRef, useRef } from "react";

class InputCheck {
  usernameRef = createRef();
  emailRef = createRef();

  usernameInfo = "";
  emailInfo = "";

  userInfo = [];

  constructor() {
    makeObservable(this, {
      usernameRef: observable,
      emailRef: observable,
      usernameInfo: observable,
      userInfo: observable,
      inputCheckClick: action
    });
  }

  inputCheckClick = () => {

    if(this.usernameRef.current.value === ""){
      this.usernameInfo = "Please fill out all lines!"
    }
    else{
      this.usernameInfo = ""
    }
    if(this.emailRef.current.value === ""){
      this.emailInfo = "Please fill out all lines!"
    }
    else{
      this.emailInfo = ""
    }
    this.userInfo = [{name: this.usernameRef.current.value, email: this.emailRef.current.value}]
  }
}

export default new InputCheck();