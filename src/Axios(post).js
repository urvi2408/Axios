import React, { useState } from "react";
import axios from 'axios';

const Form = () => {
   
    const [uid,setUid] = useState("");
    const [name,setName] = useState("");
    const [title,setTitle] = useState("");

    const [apidata,setApiData] = useState([]);
    
    const submitForm = (e) => {
                e.preventDefault();
                axios.post("https://jsonplaceholder.typicode.com/posts", {
                    userId : uid , 
                    name : name ,
                    title : title
                })
                .then((Response) => {
                    console.log(Response);
                    setApiData(Response.data)
                })
            }

   return(
   <>
    <form onSubmit={submitForm}>
    <div className="loginform">
        <div>
            <label>userId : </label>
            <input type="text" value={uid} onChange={(e) => setUid(e.target.value)}/><br/><br/>
        </div>
        <div>
            <label> Name : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
        </div>
        <div>
            <label>title : </label>
            <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)}/><br/><br/>
        </div>
        <button type="submit" > Login </button>
    </div><br/><br/>
    </form>
        <p>{apidata.userId}</p>
        <p>{apidata.name}</p>
        <p>{apidata.title}</p>
   </>
   );
}

export default Form;