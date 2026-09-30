import React from 'react';
import { useState } from 'react';
import { Trash, SquarePen } from 'lucide-react';

const App = () => {
  const initialTasks = [];

  const [task, settask] = useState(initialTasks);
  const [input, setinput] = useState('');

  const onInput = e => {
    let inpvalue = e.target.value;
    setinput(inpvalue);
  };

  // Toggle task completed status
  const toggleTask = taskId => {
    const updatedTasks = task.map(currentTask => {
      if (currentTask.id === taskId) {
        return {
          ...currentTask,
          completed: !currentTask.completed,
        };
      }

      return currentTask;
    });

    settask(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      {/* Header / Add Task */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">MY TASKS</h1>

        <div className="flex items-center gap-3 mt-8">
          <input
            onChange={onInput}
            className="flex-1 bg-slate-100 rounded-full h-12 px-5 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Type your text here..."
            type="text"
            value={input}
          />

          <button
            onClick={function () {
              const newTask = {
                id: task.length + 1,
                title: input,
                completed: false,
              };

              const newArray = [...task, newTask];

              settask(newArray);
              setinput('');
            }}
            className="bg-black text-white rounded-full px-6 h-12 font-medium active:scale-95 transition">
            + Add
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 mt-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4 text-gray-600">
            <button className="font-medium text-black">All</button>
            <span>|</span>
            <button>Active</button>
            <span>|</span>
            <button>Completed</button>
          </div>

          <span className="text-sm text-gray-500">{task.length} Tasks</span>
        </div>

        {task.map(task => {
          return (
            <div key={task.id} className="flex items-center gap-4 bg-slate-100 rounded-full mt-4 px-5 py-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 accent-black"
              />

              <h2 className={`flex-1 font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </h2>

              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:text-blue-600 active:scale-90 transition">
                  <SquarePen size={18} />
                </button>

                <button
                  checked={task.id}
                  onClick={() => removeTask(task.id)}
                  className="p-1.5 hover:text-red-600 active:scale-90 transition">
                  <Trash size={18} />
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
