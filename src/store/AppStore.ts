import {observable,action} from 'mobx';
import { createContext } from 'react';

import agent from '../api/agent';
import { RegisterUser } from '../model/RegisterUser';
import { toast } from 'react-toastify';
import { RootStore } from './RootStore';

export default class AppStore{
  rootStore:RootStore;
  constructor(rootStore:RootStore){
   this.rootStore=rootStore;
  }
    @observable register: RegisterUser|undefined;
    @observable submitting:boolean=false;
    @observable loading:boolean=false;

   
    
   
    @action registerUser=async (register:RegisterUser)=>{
        this.loading=true;
        try{
            await agent.Activities.register(register)
              
              this.loading=false
        
        }catch(error){
          toast.error(error.response.data)
          this.loading=false;
         
        }
       
    }
   
   
   


}

