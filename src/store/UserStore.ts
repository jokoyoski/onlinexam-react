import { User } from "../model/User";
import { observable, action, configure, runInAction } from "mobx";
import { LoginUser } from "../model/LoginUser";
import agent from "../api/agent";
import { RootStore } from "./RootStore";
import { toast } from "react-toastify";
import { history } from "../index";


configure({enforceActions:'always'});
export default class UserStore {
  @observable user: User | null = null;

  @observable isLoggedIn:boolean=false;

  
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action login = async (user: LoginUser) => {
    try {
      this.rootStore.appStore.loading = true;
      const result = await agent.Activities.login(user);
        runInAction(()=>{
          this.rootStore.commonStore.setToken(result.token)
          this.isLoggedIn=true;
          this.rootStore.appStore.loading = false;
            
        })
     
    } catch (error) {

      runInAction(() => {
        this.rootStore.appStore.loading=false;
        toast.error("You are not authorized")
        
       });
      console.log(error)
    }
  };
  @action logout = async () => {
    window.localStorage.removeItem("jwt");
    this.isLoggedIn=false;
    this.user = null;
    history.push("/");
  };
}
