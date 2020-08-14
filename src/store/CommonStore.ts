import { RootStore } from "./RootStore";
import { observable, action, reaction, configure } from "mobx";

configure({enforceActions:'always'});
export class CommonStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    reaction(
      () => this.token,
      (token) => {
        console.log(token)
        if (token) {
          console.log(2)
          localStorage.setItem("jwt", JSON.stringify(token));
           this.rootStore.userStore.isLoggedIn=true;
        } else {
          console.log(3)
         localStorage.removeItem("jwt");
        }
      }
    );
  }

  @observable token: string | null = window.localStorage.getItem("jwt");
  @observable appLoaded = false;

  @action setToken = (token: string) => {
    this.token=token;
  };

  @action setApploaded = () => {
    this.appLoaded = true;
  };
  @action decodeToken = () => {
   
    var jwtDecode = require('jwt-decode');
    console.log(jwtDecode)
  };
}
