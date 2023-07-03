//!  1. buat komponen memiliki hasil penambahan masing-masing.
//!  2. buat & gunakan Higher Order Component (HOC).
import "./App.css";
import Buttons from"./components/buttons"
function App() {

  return (
    <>
      <Buttons counter = {1}/>
      <Buttons counter = {2}/>
    </>
  );
}

export default App;
