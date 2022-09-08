import React, { useState } from "react";
// import {useEffec} from "react";
import axios from 'axios';

const Search = () => {
   
    const [uid,setUid] = useState([]);//to store response
    const [title,setTitle] = useState("");//to store value of input feild

    
    const SubmitForm = (e) => {
                e.preventDefault();
                axios.get(`https://jsonplaceholder.typicode.com/todos/${title}`)
                .then((Response) => {
                    console.log(Response);
                    setUid(Response.data)
                })
            
    // useEffect(() => {
    //             axios.get(`https://jsonplaceholder.typicode.com/todos/${title}`)
    //             .then((Response) => {
    //                 console.log(Response);
    //                 setUid(Response.data)
    //             })
    //   },[]);

}
   return(
   <>
    <form >
    <div className="loginform">

        <div>
            <label>userId : </label>
            <input type="text" value= {title} onChange ={(e)=>setTitle(e.target.value)} /><br/><br/>
        </div>

        <button type="submit" onClick={SubmitForm}> Login </button>
    </div><br/><br/>
    </form>
        <p>{uid.userId}</p>
        <p>{uid.id}</p>
        <p>{uid.title}</p>
        <p>{uid.completed}</p>
   </>
   );
}

export default Search;


