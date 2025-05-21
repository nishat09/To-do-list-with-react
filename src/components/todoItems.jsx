import React, {useState} from "react"




function TodoItems(props){

    const [isDone,setIsDone]=useState(false)

    function handleClick(){
        setIsDone((prevValue)=>{
            return !isDone
        })
    }

    return(
        <li 
        onClick={handleClick}

        
        key={props.index}
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textDecoration: isDone? "line-through": "none"
        }}
    >
        {props.item}

        <button
        onClick={(e) => {
          e.stopPropagation();
          props.deleteItem(props.index);
        }}
      >
        Delete
      </button>
    </li>
    )
}



export default TodoItems;