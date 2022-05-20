import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CreateNote from "./CreateNote"
import Note from './Note';

function App() {
  const [addItem,setAddItem]=useState([])
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return [...prevData,note]
    })
  }
  const deleteItem=(id)=>{
    setAddItem((oldi)=>
      oldi.filter((curData,index)=>{
        return index!== id;
      })
    )
  }
  return(
  <>
    <Navbar/>
    <CreateNote passNote={addNote}/>
 

    {addItem.map((valm,index)=>{
      return (
      <Note
      key={index}
      id={index}
      title={valm.title}
      content={valm.content}
      DeleteSelect={deleteItem}
      className="juman"
      />
    );
    })}
    <Footer/>

    </>
  )
}

export default App;
