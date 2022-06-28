import Header from "./Components/Header";
import InputBox from "./Components/InputBox";
import OutputBox from "./Components/OutputBox";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <InputBox />
        <OutputBox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
