import React, { Fragment } from "react";
import {
  Grid,
  Menu,
  Sidebar,
  Segment,
  Icon,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

interface ChildrenDetails {
  children: any;
}

export const MainPage: React.FC<ChildrenDetails> = ({ children }) => {
  return (
    <Fragment>
      <div  style={{ display:'flex',justifyContent:'flex-end',alignItems:'flex-end' ,height: "7em", paddingBottom: "2em",paddingRight:'2em' }}>
        <h3>2 Trials Left</h3>
        
       
       
       
       
       
      </div>
      <div style={{ height: "120vh" }}>
          <Grid>
              
          </Grid>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} exact to="/trials">
              <Icon name="book" />
              Do Test
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="money" />
              Buy Trials
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
               <div style={{marginLeft:'155px'}}>
               {children}
              
               </div>
                 
           
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    </Fragment>
  );
};
