import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <TodoApp />
      <footer className="info">
        <p>
          Created by <a href="https://d12n.me/">Tuğba Güler</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
