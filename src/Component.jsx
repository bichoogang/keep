import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';





const Component = (props) => {
    const [close, setclose]=useState(false);
    const[list , setlist] = useState({
        title:"",
        content:""

    })

    const myfun =(event)=>{
        const{name,value}=event.target;
        setlist((old)=>{
            return {
                ...old,
                [name]:value
            }
        })

    }
    const click=()=>{
        setlist(
            {
                title:"",
                content:""
        
            }
        );
        return props.text(list);
        

    }
    const open =()=>{
        setclose(true)
    }
    const double =()=>{
        setclose(false)
    }
    return (
        <>
            <div className="comp "  onDoubleClick={double}>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 col-10 mx-auto inp">
                            {close?  
                                <input type="text"
                                placeholder="Title"
                                name="title"
                                value={list.title}
                                onChange={myfun}
                                autoComplete="off"

                            />:null}
                            <textarea type="text"
                                placeholder="Write your note"
                                name="content"
                                value={list.content}
                                onChange={myfun}
                                onClick={open}
                            />
                            <Button onClick={click}><AddIcon /></Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Component;