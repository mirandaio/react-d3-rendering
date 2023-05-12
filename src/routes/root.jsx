import { useState } from 'react';
import LagRadar from 'react-lag-radar';
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
        <section>
          <LagRadar size="300" />
        </section>
        <section className="showcase">
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
          <input type="range" min="10" max="10000" onChange={handleOnChange} />
          <section>
            <Outlet context={data} />
          </section>
        </section>
      </main>
    </>
  );
}
