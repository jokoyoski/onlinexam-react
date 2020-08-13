import { User } from "../model/User";
import { observable, computed, action } from "mobx";
import { LoginUser } from "../model/LoginUser";
import agent from "../api/agent";
import { RootStore } from "./RootStore";
import { toast } from "react-toastify";

export default class UserStore {
  @observable user: User | null = null;

  @computed get isLoggedIn() {
    return !!this.user;
  }
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action login = async (user: LoginUser) => {
    try {
      this.rootStore.appStore.loading = true;
      const result = await agent.Activities.login(user).then((response)=>(console.log(response)));
    
      
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
}
