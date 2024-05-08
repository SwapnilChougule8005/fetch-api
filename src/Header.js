import React from 'react';

import Amazon from './Amazon';

const Header = (props) => {

   const LogoutBtn = () =>{
      alert("logout button run")
   }

   return <>
       <h1>Amazon</h1>
       {props.Buttons}
       <button style={{color:"blue" ,background:"none", border:"none",right:"120px",position:"fixed", top:"35px"} } onClick={LogoutBtn}>logout</button>
   

   </>
}
export default Header;