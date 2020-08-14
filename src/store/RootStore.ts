import AppStore from "./AppStore";
import UserStore from "./UserStore";
import { createContext } from "react";
import { configure } from "mobx";
import { CommonStore } from "./CommonStore";
import { QuestionStore } from "./QuestionStore";

configure({enforceActions:'always'});
export class RootStore{

    appStore:AppStore;
     userStore:UserStore;
     commonStore:CommonStore;
     questionStore:QuestionStore;
     constructor(){
         this.appStore=new AppStore(this);
         this.userStore=new UserStore(this);
         this.commonStore=new CommonStore(this);
         this.questionStore=new QuestionStore(this);
     }
    

}

export const RootStoreContext=createContext(new RootStore());

