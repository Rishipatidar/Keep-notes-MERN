import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    const Input__even = (event) =>{
        const {name , value }= event.target;

        setNote((prevData)=>{
            return {
            ...prevData,
            [name]: value,
            };
        });
        console.log(note);
    }
    const create__one=()=>{
     props.passNote(note); 
     setNote({
        title:"",
        content:""
    });
    }
    return(
        <>
        <div className="Des__Arr">
            <form className="form__des">
                <input type="text" name="" id="" placeholder="title"  name="title" className="edit__title" onChange={Input__even} value={note.title}/>
                <textarea name="" id="" cols="" rows="" className="edit__txtarea"  name="content" placeholder="Write Your Note" autoComplete="off" onChange={Input__even} value={note.content}></textarea>
            </form>
            <div className="btn__Civi">
                <Button onClick={create__one}>
                    <AddIcon style={{fontSize:"44px" ,color:"rgba(255, 238, 5, 0.74)",borderRadius:"10%",fontWeight:"bolder" }} className="btn__int" />
                </Button>
                </div>
        </div>
        </>
    )
}
export default CreateNote;