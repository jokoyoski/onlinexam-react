import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { RootStoreContext } from "../store/RootStore";
import { observer } from "mobx-react-lite";

 const NavBar= () => {
  const store = useContext(RootStoreContext);
  const { userStore} = store;

 
  return (

    <Menu fixed="top" inverted>
      <div style={{width:'100%'}}>
        <div style={{ width:'100%', display:'flex' ,flexDirection:'row',justifyContent:'space-between'}}>
         <div style={{display:'flex'}}>
         <div style={{marginLeft:'0%'}}>
        <Menu.Item as={NavLink} exact to="/" header>
        
        <img style={{ marginRight: "10%" }} alt="logo" src="oe.jpg" />
        TISA
      </Menu.Item>
        </div>
       
        <div>
        <Menu.Item
          as={NavLink}
          exact
          to="/register"
          position="right"
          name="About us"
        />
        </div>

         </div>



         <div style={{flexDirection:'row',display:'flex'}}>
        
           {userStore.isLoggedIn &&
 <div>
<Menu.Item
onClick={userStore.logout}
 position="right"
 name="Log out"
/>
</div>

           }
       
        {!userStore.isLoggedIn &&
 <div>
 <Menu.Item
   as={NavLink}
   exact
   to="/register"
   position="right"
   name="Join US"
 />
 </div>

        }
       
         </div>
      
       
        </div>
       



        
       
      </div>
    </Menu>
  );
};
export default observer(NavBar);
