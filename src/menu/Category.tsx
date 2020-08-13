import React from "react";
import { Card, Grid, Container,Button } from "semantic-ui-react";
import { MainPage } from "./MainPage";

export const Category = () => {
  return (
      <Container fluid>
<MainPage>

    <div className={'flex-card'}>
     <div className={'flex-box'}>
     <Card
        image="./assets/English-tisa.jpg"
        header="English"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
     </div> 
     <div className={'flex-box'}>
     <Card
        image="./assets/English-tisa.jpg"
        header="English"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
     </div>
     <div className={'flex-box'}>
     <Card
        image="./assets/English-tisa.jpg"
        header="English"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
     </div>
    
     <div className={'flex-box'}>
     <Card
        image="./assets/English-tisa.jpg"
        header="English"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
     </div>

    </div>
  

    </MainPage>
      </Container>
    
  );
};
