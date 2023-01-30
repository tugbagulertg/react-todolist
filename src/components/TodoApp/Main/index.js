import React from "react";

function Main({ setTodoItems, todoItems, activeLink }) {
  const displayActiveLinks = (e) => {
    if (activeLink === "all") {
      return e === true ? "completed" : "";
    } else if (activeLink === "active") {
      return e === true ? "hidden" : "";
    } else if (activeLink === "completed") {
      return e === true ? "completed" : "hidden";
    }
  };
  // Marking done tasks
  function handleChange(i) {
    setTodoItems(
      todoItems.map((item, index) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }
  // Removing tasks from the list
  function removeTask(id) {
    setTodoItems((oldItems) => {
      return oldItems.filter((item) => item.id !== id);
    });
  }

  // Marking or unchecking the entire task list
  function completedAll() {
    const filter = todoItems.every((item) => item.completed === true);
    console.log(filter);
    if (filter) {
      setTodoItems(
        todoItems.map((item) => {
          item.completed = false;
          return item;
        })
      );
    } else {
      setTodoItems(
        todoItems.map((item) => {
          item.completed = true;
          return item;
        })
      );
    }
  }
  return (
    <div>
      <section className="main" hidden={todoItems.length === 0}>
        <input className="toggle-all" type="checkbox" />
        <label onClick={completedAll} htmlFor="toggle-all">
          Mark all as complete
        </label>

        <ul className="todo-list">
          {todoItems.map((item, i) => (
            <li key={i} className={displayActiveLinks(item.completed)}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleChange(i)}
                />

                <label>
                  {item.todoItem}
                  {/* <input
                    placeholder="(Text)"
                    value=""
                    class="mv-editor"
                    style={{ width: "0px" }}
                  ></input> */}
                </label>

                <button
                  className="destroy"
                  onClick={() => removeTask(item.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main;
