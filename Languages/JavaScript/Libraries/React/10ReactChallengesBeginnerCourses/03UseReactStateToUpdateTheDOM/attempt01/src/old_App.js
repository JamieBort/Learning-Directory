import './styles.css';
import users from "./users-data";
function IterateFunction() { // didn't pass props. wasn't needed.
  // console.log("users[0].name:", users[0].name);

  const listItems = users.map((a, index) =>
    <div key={index} id="abcdefghi">
      <p>{a.name}</p>
      <p>{a.location}</p>
      <p>{a.car}</p>
    </div>
    );

  return <div>
    <ul>{listItems}</ul>
  </div>;
}

function App() {
  return (
    <div className="App">

      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        display data here
        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}
        <IterateFunction />
      </div>
    </div>
  );
}

export default App;