import { useEffect, useState } from "react";
import axios from "../utils/axios";

const NoteContent = ({ note, setNotesList, setNote }) => {
    const [content, setContent] = useState("")
    const [buttonText, setButtonText] = useState("Save")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setContent(note.content)
    }, [note])

    const saveNote = async () => {
        const noteData = { content, _id: "" }
        if (note._id) {
            await axios.put(`/notes/${note._id}`, { content })
            setNotesList((notesList) => {
                const noteIndex = notesList.findIndex(listNote => listNote._id === note._id);
                notesList[noteIndex].content = content;
                return [...notesList]
            })
            noteData._id = note._id;
        } else {
            const { data: responseData } = await axios.post("/notes", { content });
            setNotesList((notesList) => [responseData, ...notesList]);
            noteData._id = responseData._id;
        }
        setNote(noteData)
        setSuccess(true)
        setButtonText("Saved!")
        setTimeout(() => {
            setSuccess(false)
            setButtonText("Save")
        }, 1000);
    }

    return (
        <>
            <div className="box-border flex flex-col justify-between h-full px-8 py-4 m-5 bg-white rounded-lg shadow-lg md:w-full md:hidden">
                <textarea
                    className="w-full p-2 outline-none resize-none h-5/6"
                    placeholder="Start typing in here..."
                    value={ content }
                    onChange={ (e) => setContent(e.target.value) }
                />
                <button
                    className={ `flex items-center justify-center w-full py-2 font-semibold text-gray-200 ${content ? (success ? "bg-green-500" : "bg-gray-600") : "bg-gray-400"} border border-gray-300 rounded-md focus:border-gray-700 focus:outline-none focus:ring ${content ? (success ? "bg-green-500" : "bg-gray-600") : "bg-gray-400"}` }
                    onClick={ () => saveNote() }
                >
                    { buttonText }
                </button>
            </div>
            <div className="box-border flex-col justify-between hidden px-8 py-4 m-5 bg-white rounded-lg shadow-lg md:w-full md:flex ">
                <textarea
                    className="w-full p-2 outline-none resize-none h-5/6"
                    placeholder="Start typing in here..."
                    value={ content }
                    onChange={ (e) => setContent(e.target.value) }
                />
                <button
                    className={ `flex items-center justify-center w-full py-2 font-semibold text-gray-200 ${content ? (success ? "bg-green-500" : "bg-gray-600") : "bg-gray-400"} border border-gray-300 rounded-md focus:border-gray-700 focus:outline-none focus:ring ${content ? (success ? "bg-green-500" : "bg-gray-600") : "bg-gray-400"}` }
                    onClick={ () => saveNote() }
                >
                    { buttonText }
                </button>
            </div>
        </>
    );
};

export default NoteContent;
