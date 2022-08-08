// Import KB database Here
import data from "../test.json"

function App() {
  return (
    <div className="main">

      {/* Search bar */}
      <div className = "searchSection">
        <h3>How can we help you?</h3>
        <input placeholder="Search bar..."></input>
      </div>

      {/* List of KB articles */}
      <div className = "KbList">
        <h1>List of KBs</h1>
      </div>

    </div>
  );
}

console.log(data)

export default App;
