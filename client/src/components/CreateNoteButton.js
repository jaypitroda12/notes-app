import React from 'react'

const CreateNoteButton = ({ setNote }) => {
    return (
        <button className="flex items-center justify-center w-full py-2 mt-6 font-semibold text-gray-500 bg-gray-200 rounded-md"
            onClick={ () => setNote({ content: "" }) }>
            <svg className="w-4 h-4 mr-2 " viewBox="0 0 32 32" fill="gray">
                <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            New
        </button>
    )
}

export default CreateNoteButton
