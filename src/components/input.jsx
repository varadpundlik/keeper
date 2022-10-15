import React, { useState } from "react";
import AddTaskIcon from '@material-ui/icons/Add';

function Input(props) {
    const [newNote, setNote] = useState({
        title: "",
        note: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function expand(){
        setExpanded(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    function submitNote(event) {
        props.onAdd(newNote);
        setNote({
            title: "",
            note: ""
        })
        setExpanded(true);
        event.preventDefault();
    }
    return (
        <form align="center" className="addNote">
            {isExpanded && <input
                placeholder="Title"
                name="title"
                value={newNote.title}
                onChange={handleChange} />}
            <textarea
                placeholder="Take a Note..."
                name="note"
                rows={isExpanded ? "3" : "1"}
                value={newNote.note}
                onChange={handleChange} 
                onClick={expand}/>
                
            <br></br>
            {isExpanded && <button type="submit" onClick={submitNote}><AddTaskIcon /></button>}
            <br />
        </form>

    );
}

export default Input;