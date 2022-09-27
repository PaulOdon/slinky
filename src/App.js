import MenuTree from "./components/MenuTree";
import { menuItems } from "./data/menu";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <MenuTree menuItems={menuItems}/>
      </div>
    </div>
  );
}

export default App;
