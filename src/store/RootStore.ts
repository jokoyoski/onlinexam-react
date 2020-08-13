import AppStore from "./AppStore";
import UserStore from "./UserStore";
import { createContext } from "react";

export class RootStore{

    appStore:AppStore;
     userStore:UserStore;
     constructor(){
         this.appStore=new AppStore(this);
         this.userStore=new UserStore(this);
     }
    

}

export const RootStoreContext=createContext(new RootStore());
