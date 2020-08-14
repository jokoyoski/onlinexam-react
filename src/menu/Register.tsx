import React, { useState, useContext } from "react";
import { Grid, Form, Button, Segment} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import {RegisterUser} from '../model/RegisterUser';
import {Form as FinalForm,Field} from 'react-final-form';
import  TextInput  from "../common/TextInput";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import {combineValidators, isRequired} from 'revalidate';
import { RootStoreContext } from "../store/RootStore";
const validators=combineValidators({
  firstName: isRequired({message:'Your first name is required'}),
  lastName: isRequired({message:'last name is required'}),
  email: isRequired({message:'email is required'}),
  password: isRequired({message:'password is required'}),
 


})

export const Register = () => {
  const activityStore = useContext(RootStoreContext);
  const { appStore } = activityStore;
  const [currentDate, setNewDate] = useState(null);
 const onChange = (event:any, data:any)=>{
  convert(data.value)
 } 
 var value:any=null;
 function convert(str:any) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
   value=[date.getFullYear(), mnth, day].join("-");
  
   
   
}

  const [userInfo, setUserInfo] = useState<RegisterUser>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: null,
  });
   
  
  
  
  
  const handleFinalFormSubmit = (values:RegisterUser) => {
  values.dateOfBirth=value;
  appStore.registerUser(values).then().catch((error)=>console.log(error.response))

  };

  return (
    <Segment.Group>
      <Segment className="home-menu">
        <Grid columns="sixteen" centered>
          <div style={{ paddingTop: "9em", width: "450px" }}>
            <h1>T I S A</h1>
            <FinalForm validate={validators} onSubmit={handleFinalFormSubmit} render={({handleSubmit,invalid,pristine})=>(
 
          <Segment>
          <Form onSubmit={handleSubmit}>
              <Field
                
                  component={TextInput}
                  name="firstName"
                  value={userInfo.firstName}
                  placeholder="First Name"
                  
                  />
               
             
              <Field
                
                  component={TextInput}
                  name="lastName"
                  value={userInfo.lastName}
                  placeholder="LastName"
                />
             
              <Field
                  component={TextInput}
                  name="email"
                  value={userInfo.email}
                  placeholder="Email"
                />
            
              <Field
                
                  component={TextInput}
                  name="password"
                  value={userInfo.password}
                  placeholder="Password"
                />
            
              <Field
                   component={TextInput}
                  name="confirmPassword"
                  value={userInfo.confirmPassword}
                  placeholder="Confirm Pasword"
                />
            
             
               <div style={{marginBottom:'2em' }}>
               <SemanticDatepicker allowOnlyNumbers onChange={onChange} />
              
               </div>
           
              

              <Button positive disabled={appStore.loading ||invalid||pristine} loading={appStore.loading} type="submit">Submit</Button>
            </Form>
            </Segment>
        
            )} />
              </div>
        </Grid>
     </Segment>
    </Segment.Group>
  );
};
export default observer(Register);
