// import { getDatabase } from "firebase/database";
// import { app } from "./firebase";
// import { useState } from "react";
// import { useFirebase } from "./context/Firebase";
// import React from "react";

// const App = () => {
//   const firebase = useFirebase();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log("Firebase", firebase);

//   return (
//     <div className="App">
//       <center>
//         <h1>Firebase</h1>
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           placeholder="Enter Email"
//         />
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           type="password"
//           placeholder="Enter Password"
//         />
//         <button onClick={() => firebase.signupUserWithEmailAndPassword}>
//           Signup
//         </button>
//       </center>
//     </div>
//   );
// };

// export default App;

import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db));
  };
  return (
    <div className="App">
      <h1>Firebase</h1>
    </div>
  );
}

export default App;
