import React from 'react';

 const Estrellas=({valor:valor})=>{
      let va=Number(valor);
      const consulta=(a,b)=>(a==b || a>b);
      //console.log(valor,"Estrellas",(consulta(valor,2)?"start-active":""));
  return(
      <>
            <button  className={"btn-start small-starts "+((consulta(va,5)?"start-active":""))} disabled ></button>
            <button  className={"btn-start small-starts "+((consulta(va,4)?"start-active":""))} disabled ></button>
            <button  className={"btn-start small-starts "+((consulta(va,3)?"start-active":""))} disabled ></button>
            <button  className={"btn-start small-starts "+((consulta(va,2)?"start-active":""))} disabled ></button>
            <button  className={"btn-start small-starts "+((consulta(va,1)?"start-active":""))} disabled ></button>
      </>
  )
}
export default Estrellas;