// Import KB database Here
import data from "../test.json"

function App() {
  return (
    <div className="main">

      {/* Search bar */}
      <div className = "search-Section">
        <h3>How can we help you?</h3>
        <input placeholder="Search bar..."></input>
      </div>

      {/* List of KB articles */}
      <div className = "KbList-Section"> 
      {data.map( i => (
          <div className="KbCard">
            <h5>{i.Title}</h5>
            <h5>{i.Content}</h5>
          </div>
          
        ))}
      </div>

    </div>
  );
}

export default App;
