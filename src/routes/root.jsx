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
      <h1>Rendering performance</h1>
      <main>
        <section>
          <LagRadar size="300" />
          Find code{' '}
          <a href="https://github.com/mirandaio/react-d3-rendering">here</a>
        </section>
        <section className="showcase">
          <ul>
            <li>
              <Link to="/">React rendering</Link>
            </li>
            <li>
              <Link to="/d3-rendering">D3 rendering</Link>
            </li>
            <li>
              <Link to="/canvas-rendering">Canvas rendering</Link>
            </li>
          </ul>
          <input type="range" min="10" max="7000" onChange={handleOnChange} />
          <p>Number of data points rendered: {data.length}</p>
          <Outlet context={[data, setData]} />
        </section>
      </main>
    </>
  );
}
