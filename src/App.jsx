import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
  console.log(featuredPup);

  return (
    <div>
      {featPupId && (
        <div>
          <h2 className="header">{featuredPup.name}</h2>
          <ul>
            <li className="list-element">Age: {featuredPup.age}</li>
            <li className="list-element">Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {/*{featPupId}*/}
      {puppies.map((puppy) => (
        <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
    </div>
  );
}

export default App;
