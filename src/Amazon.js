import React from 'react';



const Amazon = () => {
    let HomeBtn = () => {
        alert("home button run");
    }
    let AboutBtn = () => {
        alert("home about run");
    }
    let ProductBtn = () => {
        alert("home product run");
    }
    

 return <div>
    Buttons{ <div>
<button style={{right:"280px",position:"fixed", top:"35px"}} onClick={HomeBtn}>Home</button>
<button style={{right:"230px",position:"fixed", top:"35px"}}  onClick={AboutBtn}>About</button>
<button style={{right:"170px",position:"fixed", top:"35px"}} onClick={ProductBtn} >Product</button>
</div>}
</div>
}
export default Amazon;
