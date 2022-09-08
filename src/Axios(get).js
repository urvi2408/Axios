import React, { useState } from "react";
import axios from 'axios';

function Data(){

    const [apidata,setApiData] = useState([]);

    const getdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((Response) => {
            console.log(Response);
            setApiData(Response.data)
        })
    }

    return(
        <div className="get">
            <button onClick={getdata}>click</button>
            {
                apidata.map((element) => {
                    console.log(element);
                    return(
                        <>
                        <p>user_id : {element.userId}</p>
                        <p>id : {element.id}</p>
                        <p>title : {element.title}</p>
                        <p>body : {element.body}</p>
                        </>
                    )
                })
            }
        </div>
    )

}

export default Data;