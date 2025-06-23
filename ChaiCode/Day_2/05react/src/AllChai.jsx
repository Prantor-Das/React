import { useEffect, useState } from "react";

export function ChaiMenu() {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/all-chai")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => setError(err.message));
  }, []); 
  // useEffect(callback, [dependencies])
  // [] - no dependencies
  // if dependencies are not provided, then the callback will be called on every render
  // if dependencies are provided, then the callback will be called only when the dependencies change

  return (
    <div>
      <h2>Available Chai</h2>
      <ul>
        {menu.map((chai) => (
          <li key={chai.id}>{chai.name}</li>
          // key is used to identify each item in the list
          // key should be unique
          // majority of the time database id is used
        ))}

        {/* js likhna hai jsx mein use {} uske andar js likho */}

      </ul>
    </div>
  );
}
