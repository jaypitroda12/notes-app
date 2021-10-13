import React from 'react'

const ShowNotesButton = ({ showList, setShowList }) => {
    return (
        <button className="flex items-center justify-center w-full py-2 my-2 font-semibold text-gray-500 bg-gray-200 rounded-md"
            onClick={ () => setShowList(!showList) }>
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 23.717" fill="gray">
                <path d="M5,6 L19,6 C19.5522847,6 20,6.44771525 20,7 C20,7.55228475 19.5522847,8 19,8 L5,8 C4.44771525,8 4,7.55228475 4,7 C4,6.44771525 4.44771525,6 5,6 Z M5,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 Z M5,16 L19,16 C19.5522847,16 20,16.4477153 20,17 C20,17.5522847 19.5522847,18 19,18 L5,18 C4.44771525,18 4,17.5522847 4,17 C4,16.4477153 4.44771525,16 5,16 Z" />
            </svg>
            { showList ? "Hide" : "Show" } Notes
        </button>
    )
}

export default ShowNotesButton
