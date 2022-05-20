import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Note=(props)=>{
    const DeleteNote=()=>{
        props.DeleteSelect(props.id);
    }
return(
    <>
    <div className="arrange_divnote">
    <div className="Note__get">
        <p className="Note__gettitl">{props.title}</p>
        <p className="Note__getcont">{props.content}</p>
        <div className="dlt__sys">
        <DeleteForeverIcon onClick={DeleteNote} style={{fontSize:"2rem", textShadow: "4px 4px 16px 4px gray"}} className="deletbtn__des"/>
        </div>
    </div>
    </div>
    </>
)
}

export default Note;