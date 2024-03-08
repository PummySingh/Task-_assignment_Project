import React,{useContext,useState}from 'react'
import Notes from './Notes'
import noteContext from "../context/notes/noteContext"
const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const[note,setNote]=useState({title:"",description:"",tag:""})
    const handleClick=()=>{
   addNote(note);
    }
    const onChange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
    <h2> Add A note</h2>
    <form>
    <div class="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
   
    </div>
    <div class="form-group">
      <label for="desc">Description</label>
      <input type="text" class="form-control" id="description" name="description" placeholder="Description" onChange={onChange} />
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
  </form>
  <Notes/>
      </div>
  )
}

export default AddNote
