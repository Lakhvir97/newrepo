
import Header from "./Header";
import Secondsection from "./Secondsection";
import Thirdsection from "./Thirdsection";
import Fourthsection from "./Fourthsection";
import { Contain } from "./styled";

import "./App.css";
function App() {
  return (
    <Contain>
      <Header />
      <Secondsection />
      <Thirdsection/>
      <Fourthsection/>
    </Contain>
  );
}

export default App;
