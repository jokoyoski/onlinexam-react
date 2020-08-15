import { RootStore } from "./RootStore";
import { observable, action, runInAction, toJS } from "mobx";
import agent from "../api/agent";
import { Category } from "../model/Category";
import { toast } from "react-toastify";
import { history } from "../index";
//import { toJS } from "mobx";
import { Question, PerQuestion } from "../model/Question";

export class QuestionStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable token: string | null = null;
  @observable categories: Category[] = [];
  @observable loadingCategories: boolean = false;
  @observable target: number = 0;
  @observable loadQuestion: boolean = false;
  @observable questionList: Question | null = null;
  @observable perQuestion: PerQuestion | undefined = undefined;
  @observable selectedOption: number = 0;

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

  @action getQuestion = async (categoryId: number, userId: number) => {
    try {
      this.target = categoryId;
      this.loadQuestion = true;
      await agent.Activities.getQuestion(categoryId, userId).then(
        (question: Question) => {
          let j = 1;

          for (let i = 0; i <= question.questionsCollections.length - 1; i++) {
            question.questionsCollections[i].QuestionNumber = j;
            question.questionsCollections[i].selectedOption=0;
            j++;
          }

          runInAction(() => {
            this.target = 0;
            this.loadQuestion = false;
            this.questionList = question;
            this.perQuestion = question.questionsCollections[0];
            console.log(toJS(this.perQuestion.options));
          });
          history.push("/question");
        }
      );
    } catch (error) {
      toast.error("Error occured while getting your question");
      runInAction(() => {
        console.log(error);
        this.target = 0;
        this.loadQuestion = false;
      });
    }
  };

  @action SetCurrentQuestion = async(question:number,option:number)=>{
    var getQuestion=this.questionList?.questionsCollections.find(x=>x.QuestionNumber==question);
    getQuestion!.selectedOption=option;
}
 @action returnSelectedOptionInQuestion=async(question:number)=>{
   var Currentquestion=this.questionList?.questionsCollections.find(x=>x.QuestionNumber==question);
   return  Promise.resolve(Currentquestion?.selectedOption!);
  
 }

@action SetCurrentQuestionFromPage = async(question:number)=>{
  console.log(question)
  var getQuestion=this.questionList?.questionsCollections.find(x=>x.QuestionNumber==question);
  console.log(getQuestion)
  this.perQuestion=getQuestion
  console.log(this.perQuestion)
}
}
