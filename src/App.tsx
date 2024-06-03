import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="text-green-200 font-bold dark ">
      <Button>
        <Link to={"/profile"}>click me</Link>
      </Button>
    </div>
  );
}

export default App;
