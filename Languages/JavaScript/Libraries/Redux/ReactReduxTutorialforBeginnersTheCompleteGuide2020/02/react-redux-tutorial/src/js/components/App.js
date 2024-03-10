// src/js/components/App.js

// ************************************************

// import React from "react";
// import List from "./List";

// const App = () => (
//   <div>
//     <h2>Articles</h2>
//       <List />
//   </div>
// );

// export default App;

// ************************************************

import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
  </>
);

export default App;