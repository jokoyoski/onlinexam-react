import React, { useContext, useState } from 'react'
import {Segment, Image, Grid, Form, Button} from 'semantic-ui-react'
import {Form as FinalForm,Field} from 'react-final-form';
import TextInput from '../common/TextInput'
import { RootStoreContext } from '../store/RootStore';
import { LoginUser } from '../model/LoginUser';
import { combineValidators, isRequired } from 'revalidate';

export const HomePage = () => {
  const validators=combineValidators({
    username: isRequired({message:'email is required'}),
    password: isRequired({message:'password is required'}),
   
  
  
  })
  
  const handleFinalFormSubmit = (values:LoginUser) => {
    console.log(values)
    userStore.login(values).then().catch((error)=>console.log(error.response))
 
   };
  const store = useContext(RootStoreContext);
  const { userStore ,appStore } = store;
  const [userInfo, setUserInfo] = useState<LoginUser>({
    
    username: "",
    password: ""
   
  });
    return (
      
        <Segment.Group>
            <Segment className='home-menu'>
            <Grid columns='sixteen' centered>
            <div style={{paddingTop:'3em'}} >
            <Image src='pp.png' size='large' rounded />
            <FinalForm validate={validators} onSubmit={handleFinalFormSubmit} render={({handleSubmit,invalid,pristine})=>(
 
 <Segment>
 <Form onSubmit={handleSubmit}>
    
      
    
     <Field
         component={TextInput}
         name="username"
         value={userInfo.username}
         placeholder="Email"
       />
   
     <Field
       
         component={TextInput}
         name="password"
         value={userInfo.password}
         placeholder="Password"
       />

     <Button positive disabled={appStore.loading ||invalid||pristine} loading={appStore.loading} type="submit">Submit</Button>
   </Form>
   </Segment>

   )} />
            </div>
            </Grid>
            </Segment>
           
            
          
        </Segment.Group>
    )
}
