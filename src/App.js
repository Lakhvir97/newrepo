import { Contain } from "./styled";
import Header from "./Header";
import Secondsection from "./Secondsection";
import Thirdsection from "./Thirdsection";
import SolutionSction from "./SolutionSction";
import OurclientSection from "./OurclientSection";
import Testimonalsection from "./Testimonalsection";
import OurBlog from "./OurBlog";
import Seventhsection from "./Seventhsection";
import Imagessection from "./Imagessection";
import "./App.css";
import Formsection from "./Formsection";
import Footer from "./Footer";


function App() {
  return (
    <Contain>
      <Header />
      <Secondsection />
      <Thirdsection/>
      <SolutionSction/>
      <OurclientSection/>
      <Testimonalsection/>
      <OurBlog/>
      <Seventhsection/>
      <Imagessection/>
      <Formsection/>
      <Footer/>
    </Contain>
    
  );
}

export default App;
