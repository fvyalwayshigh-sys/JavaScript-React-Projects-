import React, { useState } from 'react';

const App = () => {
    // Keeping the input values in state so we can control the form
    const [title, setsTitle] = useState('');
    const [details, setsDetails] = useState('');

    // This array will hold all the notes we create
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        // Make a copy of the current notes and add the new one
        const copyTask = [...task];
        copyTask.push({ title, details });
        setTask(copyTask);

        // Clear the inputs after adding the note
        setsTitle('');
        setsDetails('');
    };

    const deleteNote = (idx) => {
        // Copy the notes, remove the selected one, and update the state
        const copyTask = [...task];
        copyTask.splice(idx, 1);
        setTask(copyTask);
    };

    return (
        <div className="min-h-screen bg-white text-black p-10">
            {/* Small note image at the top */}
            <div className="flex items-center justify-center">
                <img
                    className="rotate-6 h-16 mb-6"
                    src="https://static.vecteezy.com/system/resources/thumbnails/051/663/808/small/cute-sticky-note-png.png"
                    alt=""
                />
            </div>

            {/* Form used to create a new note */}
            <form
                onSubmit={submitHandler}
                className="flex gap-4 flex-col max-w-2xl mx-auto"
            >
                {/* Note heading */}
                <input
                    type="text"
                    placeholder="Enter Notes Heading"
                    className="p-5 py-3 border font-medium outline-none border-pink-400 rounded"
                    value={title}
                    onChange={(e) => setsTitle(e.target.value)}
                />

                {/* Note details */}
                <input
                    type="text"
                    placeholder="Write Details"
                    className="px-5 h-20 py-3 outline-none border font-medium border-pink-400 rounded"
                    value={details}
                    onChange={(e) => setsDetails(e.target.value)}
                />

                {/* Add the note to our task array */}
                <button className="active:bg-pink-400 active:scale-95 transition-all duration-100 font-medium outline-none bg-pink-300 text-black px-5 py-3 rounded">
                    Add Note
                </button>
            </form>

            {/* Section heading */}
            <div className="flex items-center justify-center">
                <h1 className="h-12 w-34 rounded flex items-center justify-center mt-12 bg-pink-300 font-medium font-sans">
                    Your Notes
                </h1>
            </div>

            {/* Render all the notes stored in the task array */}
            <div className="flex flex-wrap items-center justify-center gap-8 p-10">
                {task.map((elem, idx) => {
                    return (
                        <div
                            key={idx}
                            className="h-83 w-60 rounded-2xl border-2 border-pink-400 bg-no-repeat bg-cover bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-1.png')] px-5 pt-10 pb-5 flex flex-col"
                        >
                            {/* Show the note title */}
                            <h3 className="font-bold text-pink-400">TITLE:</h3>

                            <h3 className="mt-1 wrap-break-words">
                                {elem.title}
                            </h3>

                            {/* Show the note details */}
                            <h3 className="mt-4 font-bold text-pink-400">
                                Details:
                            </h3>

                            <h4 className="mt-1 wrap-break-words">
                                {elem.details}
                            </h4>

                            {/* Delete button for this particular note */}
                            <div className="mt-auto flex items-center justify-center">
                                <button
                                    onClick={() => {
                                        deleteNote(idx);
                                    }}
                                    className="bg-pink-400 text-white rounded-4xl px-4 py-1 font-normal active:scale-95 cursor-pointer"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
