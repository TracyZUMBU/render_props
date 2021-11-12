import "./App.css";
import Vegeta from "./renderProps/Vegeta";
import Goku from "./renderProps/Goku";
import AddHits from "./renderProps/AddHits";

function App() {
  return (
    <div className="App">
      <h1>Goku vs Vegeta</h1>
      {/* <Vegeta name={(saiyan) => saiyan && "Vegeta"}/>
    <Goku name="Goku" name={(saiyan) => saiyan && "Goku"}/> */}
      <AddHits
        render={(hits, addOne) => (
          <Vegeta
            hits={hits}
            addOne={addOne}
            name="Vegeta"
            name={(saiyan) => saiyan && "Vegeta"}
          />
        )}
      />
      <AddHits
        render={(hits, addOne) => (
          <Goku
            hits={hits}
            addOne={addOne}
            name="Goku"
            name={(saiyan) => saiyan && "Goku"}
          />
        )}
      />
    </div>
  );
}

export default App;
