import { Contain } from "./styled";
import Header from "./Header";
import Secondsection from "./Secondsection";
import Thirdsection from "./Thirdsection";
import Fourthsection from "./Fourthsection";
import FifthSection from "./FifthSection";
import Sixthsection from "./Sixthsection";
import OurBlog from "./OurBlog";
import Seventhsection from "./Seventhsection";
import Allimages from "./Allimages";

import "./App.css";
import Formsection from "./Formsection";


function App() {
  return (
    <Contain>
      <Header />
      <Secondsection />
      <Thirdsection/>
      <Fourthsection/>
      <FifthSection/>
      <Sixthsection/>
      <OurBlog/>
      <Seventhsection/>
      <Allimages/>
      <Formsection/>
    </Contain>
  );
}

export default App;
