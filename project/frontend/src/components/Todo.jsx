import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (value.trim() === "") return;
    setTodos([...todos, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleSave = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editValue;
    setTodos(newTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 pt-20">
      {/* Input + Add Button */}
      <div className="flex w-full max-w-md mb-6">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Add a new todo..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      {/* Todos List */}
      <div className="w-full max-w-md">
        {todos.map((todo, index) => (
          <div key={index} className="bg-white p-3 rounded shadow mb-2 flex justify-between items-center">
            {editIndex === index ? (
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="flex-grow px-2 py-1 border border-gray-300 rounded mr-2"
              />
            ) : (
              <span>{todo}</span>
            )}

            <div className="flex space-x-2">
              {editIndex === index ? (
                <button
                  onClick={() => handleSave(index)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(index)}
                  className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => handleDelete(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
