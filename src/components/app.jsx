import React, { useState } from "react";
import Footer from "./footer";
import Note from "./note";
import Header from "./header";
import Input from "./input";

function App() {

    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(key) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== key;
            });
        });
    }

    return <div>
        <Header />
        <br></br>
        <Input onAdd={addNote} />
        {notes.map((noteItem, index) => {
            return (
                <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    note={noteItem.note}
                    onDelete={deleteNote}
                />
            );
        })}
        <Footer />
    </div>;
}

export default App;