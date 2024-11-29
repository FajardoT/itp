import React, { useState } from 'react';

export default function({ isOpen, onClose, task}) {
    const [taskName, setTaskName] = useState(task.title);
    const [availableLabels, setAvailableLabels] = useState(['Urgent', 'Home', 'Work']); // change when DB added
    const [selectedLabels, setSelectedLabels] = useState([]);
    const [newLabel, setNewLabel] = useState(''); 
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [dueTime, setDueTime] = useState('');
    const [comments, setComments] = useState('');

    console.log(task.tags)

    // selecting label(s) to add to current task
    const handleLabelChange = (label) => {
    if (selectedLabels.includes(label)) {
        setSelectedLabels(selectedLabels.filter((l) => l !== label));
    } else {
        setSelectedLabels([...selectedLabels, label]);
    }
    };

    // creating a new label
    const handleAddLabel = () => {
    if (newLabel && !availableLabels.includes(newLabel)) {
        setAvailableLabels([...availableLabels, newLabel]);
        setNewLabel(''); 
    }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // form submission logic here (for now, just log to console)
        console.log({ taskName, selectedLabels, dueDate, dueTime, comments });

        onClose();
    };

    if (!isOpen) return null;

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg p-6 shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit a Task</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block text-gray-700 mb-2">Task Name</label>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
                required
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 mb-2">Labels</label>
            <div className="grid grid-cols-2 max-h-32 overflow-auto mb-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
                {availableLabels.map((label, index) => (
                <label key={index} className="flex items-center mb-2">
                    <input
                    type="checkbox"
                    checked={selectedLabels.includes(label)}
                    onChange={() => handleLabelChange(label)}
                    className="mr-2"
                    />
                    <span className="text-gray-600">{label}</span>
                </label>
                ))}
            </div>
            <div className="flex items-center">
                <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="Add a new label"
                className="border border-gray-300 rounded p-2 flex-grow mr-2"
                />
                <button
                type="button"
                onClick={handleAddLabel}
                className="bg-blue-500 text-white rounded px-4 py-2"
                >
                Add
                </button>
            </div>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 mb-2">Due Date</label>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 mb-2">Due Time</label>
            <input
                type="time"
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 mb-2">Comments</label>
            <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
                rows="3"
            ></textarea>
            </div>

            <div className="flex justify-end">
            <button
                type="button"
                onClick={onClose} // Close modal on cancel
                className="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2"
            >
                Cancel
            </button>
            <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2"
            >
                Add
            </button>
            </div>
        </form>
        </div>
    </div>
    );
};
