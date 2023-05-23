import "./App.css";
import { Counter } from "./components/Counter";
import { Greet } from "./components/Greet";
import { LoggedIn } from "./components/LoggedIn";

function App() {
  return (
    <div className="App">
      <Greet>
        <h2>Let's Get Started!</h2>
      </Greet>
      <LoggedIn></LoggedIn>
      <Counter></Counter>
    </div>
  );
}

export default App;
