function Footer({ setTodoItems, todoItems, setActiveLink, activeLink }) {
  const leftItems = todoItems.filter((item) => item.completed === false);
  const completedItems = todoItems.filter((item) => item.completed === true);

  const removeCompletedItems = () => {
    setTodoItems((todoItems) => todoItems.filter((item) => !item.completed));
  };

  return (
    <div>
      <footer className="footer" hidden={todoItems.length === 0 ? true : ""}>
        <span className="todo-count">
          <strong>{leftItems.length}</strong> items left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={activeLink === "all" ? "selected" : ""}
              onClick={() => setActiveLink("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeLink === "active" ? "selected" : ""}
              onClick={() => setActiveLink("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeLink === "completed" ? "selected" : ""}
              onClick={() => setActiveLink("completed")}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={removeCompletedItems}
          hidden={completedItems.length === 0 ? "hidden" : ""}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
