import axios from "../utils/axios";

const NotesList = ({ notesList, setNote, note, setNotesList }) => {
    const deleteNote = async (selectedNote) => {
        if (selectedNote._id) {
            await axios.delete(`/notes/${selectedNote._id}`);
            setNotesList((notesList) => {
                const noteIndex = notesList.findIndex((listNote) => listNote._id === selectedNote._id);
                const newList = [...notesList];
                newList.splice(noteIndex, 1)
                return newList;
            });
            setNote({ _id: "", content: "" })
            return
        }
    }

    return (
        <nav className="w-full overflow-y-auto max-h-44 md:max-h-full">
            { notesList.map((listNote) => (
                <span
                    key={ listNote._id }
                    className={ `flex items-center justify-between py-2 my-1 ${listNote._id === note._id
                        ? "text-gray-600 bg-gray-300"
                        : "text-gray-300 transition-colors duration-200 transform bg-gray-500 hover:bg-gray-400 hover:text-gray-700"
                        } rounded-md` }
                    onClick={ () => setNote({ ...listNote }) }
                >
                    <span className="mx-4 font-medium truncate">
                        { listNote.content }
                    </span>
                    <svg className="h-5 p-1 mx-2 bg-gray-700 rounded min-w-min" viewBox="0 0 96 120" fill="white" fillOpacity="50%" onClick={ () => deleteNote(listNote) }>
                        <path d="M9.76,77.76,39.52,48,9.76,18.24a6,6,0,1,1,8.49-8.48L48,39.52,77.76,9.76a6,6,0,1,1,8.49,8.48L56.48,48,86.24,77.76a6,6,0,1,1-8.49,8.48L48,56.48,18.24,86.24a6,6,0,0,1-8.49-8.48Z" />
                    </svg>
                </span>
            )) }
        </nav>
    );
};

export default NotesList;
