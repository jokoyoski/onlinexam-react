import { RootStore } from "./RootStore";
import { observable, action, runInAction } from "mobx";
import agent from "../api/agent";
import { Category } from "../model/Category";
import { toJS } from "mobx";
import { toast } from "react-toastify";

export class QuestionStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable token: string | null = null;
  @observable categories: Category[] = [];
  @observable loadingCategories: boolean = false;

  @action getCategory = async () => {
    try {
      this.loadingCategories = true;
      await agent.Activities.getCategory().then((value: Category[]) => {
        runInAction(() => {
          this.loadingCategories = false;
          this.categories = value;
          return Promise.resolve(this.categories);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
}
