import { Link } from 'react-router-dom';

export default function Root() {
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
        </ul>
      </main>
    </>
  );
}
