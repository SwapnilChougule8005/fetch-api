import React, {useState} from 'react';

const Products = (props) => {
    const [item, setItem] = useState("maggi");


    
 const Option = () => {
    setItem("pasta");
 }  
 const Biscuits =[
    {id:1, company:"Parle"},
    {id:2, company:"Hide&Seek"},
    {id:3, company:"Marie"},
    {id:4, company:"Dark Fantasy"},
    {id:5, company:"Bourbon"}
 ]
 const handleSubmit = (event,item) => {
       alert(item.company)
 }
 return (
    <div>
        <h2>{props.title}</h2>
        <p>product : {item}</p>
        <p>{props.MRP}</p>
        <button onClick={Option}>click</button>
      <div>
        <ul>
        <h3>Biscuits</h3>
            {
                Biscuits.map((item) => {
                    return <li onClick={(event)=>handleSubmit(event,item)} key={item.id}>{item.company}</li>
                })
            }
        </ul>
      </div>
    </div>
 ) 
}

export default Products;