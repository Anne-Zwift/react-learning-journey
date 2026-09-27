import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { townsRoute } from '../router';
import { towns } from '../data/items';

function TownListPage() {
  const [inputValue, setInputValue] = useState('');
  const { filter } = townsRoute.useSearch();

  const filteredTowns = filter
    ? towns.filter((town) =>
        town.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : towns;

  return (
    <div>
      <h1>Towns</h1>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Filter towns..."
        />{' '}
        <Link to={townsRoute.to} search={{ filter: inputValue || undefined }}>
          Filter
        </Link>{' '}
        <Link to={townsRoute.to} search={{ filter: undefined }}>
          Reset Filter
        </Link>
      </div>
      <p>Active filter: {filter ?? '(empty)'}</p>

      <ul>
        {filteredTowns.map((town) => (
          <li key={town.id}>{town.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TownListPage;
