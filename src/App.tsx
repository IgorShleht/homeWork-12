import "./App.css";
import { Input } from "./components/Input/Input";
import { Console } from "./components/Console/Console";

export const App = () => {
  return (
    <div className="App">
      <Console />
      <Input />
    </div>

  );
}
