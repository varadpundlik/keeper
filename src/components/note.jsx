import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function deleteClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1 align="centerk">{props.title}</h1>
            <p>{props.note}</p>
            <button onClick={deleteClick}><DeleteIcon/></button>
        </div>
    )
}

export default Note;