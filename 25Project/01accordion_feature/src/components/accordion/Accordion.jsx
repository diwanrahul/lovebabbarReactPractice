import React from 'react'
import Data from "./data"
export default function Accordion() {
const [selected, setselected] = React.useState(null);
    const handleSingleAccordion = (id) =>{
console.log(id);
setselected(id === selected ? null : id);
    }
  return (
    <div>
        <div>
            {
               Data.map((dataItem)=>(
                    <div key={dataItem.id}>
                        <div onClick={()=>handleSingleAccordion(dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ? <p>{dataItem.content}</p>:null
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}
