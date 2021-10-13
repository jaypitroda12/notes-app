import { useState } from 'react'
import CreateNoteButton from './CreateNoteButton'
import NotesList from './NotesList'
import ShowNotesButton from './ShowNotesButton'

const Navbar = ({ notesList, setNote, note, setNotesList }) => {
    const [showList, setShowList] = useState(false)
    return (
        <>
            <div className="flex-col hidden w-64 h-screen px-4 py-8 bg-gray-600 border-r md:flex">
                <h2 className="text-3xl font-semibold text-gray-200">My Awesome Notepad</h2>
                <CreateNoteButton setNote={ setNote } />
                <hr className="my-3" />
                <NotesList note={ note } notesList={ notesList } setNote={ setNote } setNotesList={ setNotesList } />
            </div>
            <div className="flex flex-col items-center w-full px-4 py-8 bg-gray-600 border-r md:hidden">
                <h2 className="text-3xl font-semibold text-gray-200">My Awesome Notepad</h2>
                <CreateNoteButton setNote={ setNote } />
                { notesList.length !== 0 && <ShowNotesButton showList={ showList } setShowList={ setShowList } /> }
                { showList && <NotesList note={ note } notesList={ notesList } setNote={ setNote } setNotesList={ setNotesList } /> }
            </div>
        </>
    )
}

export default Navbar
