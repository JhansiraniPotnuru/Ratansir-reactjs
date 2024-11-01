import { useState } from "react";

function Discount(){
    const [price, setPrice] = useState(1000); 
    const [discount, setDiscount] = useState(0); 
    const applyDiscount=(discountValue)=>
        { 
            if(discountValue===10){
                setDiscount(10)
                setPrice(price*0.1);
            }
            else if(discountValue===20){
                setDiscount(20)
                setPrice(price*0.2);
            }
            else if(discountValue===30){
                setDiscount(30)
                setPrice(price*0.3);
            }
            else{
                setDiscount(0);
                setPrice(1000);
            }
        }
        return(
            <>
            <h2>Original Price: $1000</h2>
            <h3>Current Price: ${price.toFixed(2)}</h3>
            <p> Click a button to apply a disscount</p>
            <button onClick={() => applyDiscount(10)}>Apply 10% Discount</button>
            <button onClick={() => applyDiscount(20)}>Apply 20% Discount</button>
            <button onClick={() => applyDiscount(30)}>Apply 30% Discount</button>
            <button onClick={() => applyDiscount(0)}>Reset</button>
            </>
        );
    

}
export default Discount;