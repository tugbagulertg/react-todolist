import { useState, useEffect } from "react";

function Header({ setTodoItems, todoItems }) {
  const [form, setForm] = useState({ id: "", todoItem: "", completed: false });

  const handleChange = (e) => {
    setForm({
      ...form,
      id: todoItems.length + 1,
      [e.target.name]: e.target.value,
      completed: false,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.todoItem === "") {
      return false;
    }
    setTodoItems([...todoItems, form]);
    setForm({ todoItem: "" });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            placeholder="What needs to be done?"
            className="new-todo"
            name="todoItem"
            value={form.todoItem}
            autoFocus
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
}

export default Header;
