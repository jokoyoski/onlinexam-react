import React, { Fragment, useContext, useEffect } from 'react';
import {Container } from 'semantic-ui-react';
import './App.css';
import  NavBar  from './nav/NavBar';
import  HomePage  from './menu/HomePage';
import { Route, RouteComponentProps } from 'react-router-dom';
import { MainPage } from './menu/MainPage';
import { trials } from './menu/trials';
import  Category  from './menu/Category';
import Register from './menu/Register';
import dateFnsLocalizer from 'react-widgets-date-fns';
import {ToastContainer} from 'react-toastify';
import { RootStoreContext } from './store/RootStore';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Question } from './menu/Question';

dateFnsLocalizer();
const App:React.FC=()=> {
  const rootStore = useContext(RootStoreContext);
  const {setApploaded,token}=rootStore.commonStore;
   useEffect(()=>{
   var token= window.localStorage.getItem("jwt");
   
     if(token){
      
      runInAction(()=>{
        
        rootStore.userStore.isLoggedIn=true;
        console.log(rootStore.userStore.isLoggedIn)
      })
      
     }
   })
  return (
    <Fragment>
    <ToastContainer position='bottom-right'/>
   <NavBar/>
   <Container fluid>
   <Route exact path='/' component={HomePage}  />
   <Route  path='/register' component={Register}  />
   <Route  path='/question' component={Question}  />
   <Route  path='/main' component={MainPage}  />
   <Route  path='/trials' component={trials}  />
   <Route  path='/category' component={Category}  />
   
   </Container>
   
    </Fragment>
   
    
  );
}

export default observer(App);
