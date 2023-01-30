import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function TodoApp() {
  const [activeLink, setActiveLink] = useState("all");
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  return (
    <div>
      <section className="todoapp">
        <Header setTodoItems={setTodoItems} todoItems={todoItems} />
        <Main
          setTodoItems={setTodoItems}
          todoItems={todoItems}
          activeLink={activeLink}
        />
        <Footer
          setTodoItems={setTodoItems}
          todoItems={todoItems}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </section>
    </div>
  );
}

export default TodoApp;
