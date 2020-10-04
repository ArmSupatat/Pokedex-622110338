import React, { useState, useEffect } from "react";
import "./styles.css";

async function pokeapi() {
  const pokeapi = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return pokeapi.json();
}

export default function App() {
  const [error, setError] = useState(undefined);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(false);

  const handleFetch = async () => {
    setNum2(true);
    try {
      const fetch = await pokeapi();
      setNum1(fetch);
    } catch {
      setError("error");
    }
    setNum2(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      {!num2 && num1 && (
        <div>
          <h1>Pokedex</h1>
          {num1.results.map((item) => (
            <div>
              <ul>
                <li>{item.name}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
