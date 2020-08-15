import { option } from "./Option";

export  interface Question{

 trials:string;
 questionsCollections:PerQuestion[];

}


export interface PerQuestion{
    trials:string;
    categoryId:number;
    questions:string;
    questionId:number
    QuestionNumber:number;
    options:option[];
    selectedOption:number;
}