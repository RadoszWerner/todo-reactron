import "./App.css";
import NavBar from "./components/navbar";
import NotesPanel from "./components/notespanel";

const App = () => {
  return (
    <NavBar>
      <NotesPanel></NotesPanel>
    </NavBar>
  );
};

export default App;
