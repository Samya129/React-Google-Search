import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <SearchBarContainer/>
    </div>
  );
}

export default App;
