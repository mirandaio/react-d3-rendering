import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { generateData } from '../generate-data';

export default function Root() {
  const [data, setData] = useState(() => generateData(10));

  const handleOnChange = (e) => {
    setData(generateData(e.target.value));
  };

  return (
    <>
      <h1>React + D3 rendering</h1>
      <main>
        <ul>
          <li>
            <Link to="/react-rendering">React rendering</Link>
          </li>
          <li>
            <Link to="/d3-rendering">D3 rendering</Link>
          </li>
          <li>
            <Link to="/canvas-rendering">Canvas rendering</Link>
          </li>
        </ul>
        <input type="range" min="10" max="1000" onChange={handleOnChange} />
        <section>
          <Outlet context={data} />
        </section>
      </main>
    </>
  );
}
