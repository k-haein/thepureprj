//RegisterPage.js
import React, { useState } from 'react';


function RegisterPage() {

    // const [TitleValue, setTitleValue] = useState("");
    // const [ContentValue, setContentValue] = useState("");

    // const onTitleChange = ({event}) => {
    //     setTitleValue(event.currentTarget.value);
    //   };
    //   console.log(TitleValue);
    
    //   const onContentChange = ({event}) => {
    //     setContentValue(event.currentTarget.value);
    //   };
    //   console.log(ContentValue);

    return (
        <div>
            <form>
                <br/>
                <label>title: </label><input type="text" name='title'/>
                {/* <input onChange value={onTitleChange} type="text" name='title'/> */}
                <hr></hr>
                <div><textarea name='content'/> 
                    {/* <textarea onChange value={onContentChange} name='content'/> */}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
 
export default RegisterPage;
