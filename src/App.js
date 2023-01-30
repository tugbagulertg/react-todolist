import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <TodoApp />
      <footer className="info">
        <p>
          Created by{" "}
          <a href="https://www.linkedin.com/in/tugbagulerr/">Tuğba Güler</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
