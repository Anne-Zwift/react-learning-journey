// src/Demo.tsx
import { useState } from 'react';
import BackgroundColorChanger from './BackgroundColorChanger';
import EventCard from './EventCard';
import InputLogger from './InputLogger';
import LoadingIndicator from './LoadingIndicator';
import MouseTracker from './MouseTracker';
import ProductList from './ProductList';
import SafeCounter from './SafeCounter';
import SharedTextApp from './SharedTextApp';
import ToggleMessage from './ToggleMessage';
import UserContext from './UserContext';
import Layout from './Layout';
import Footer from './Footer';

function Demo() {
  const cityName = 'Oslo';
  const population = 709037;
  const imageUrl = 'https://via.placeholder.com/150';
  const imageAltText = 'Placeholder image representing Oslo';
  const [showTracker, setShowTracker] = useState(true);
  const [userName, setUserName] = useState('Ola Nordmann');

  return (
    <div>
      {/* ===== everything from your old App body, minus the old router bits ===== */}
      <h1>{cityName}</h1>
      <p style={{ color: 'darkgreen' }}>Population: {population}</p>
      <img style={{ marginBottom: '20px' }} src={imageUrl} alt={imageAltText} />
      <EventCard title="Oslo City Event" date="2026-01-01" location="Oslo" />
      <EventCard title="17. mai-feiring" date="2026-05-17" location="Slottsplassen, Oslo" />
      <EventCard title="Sommerkonsert" date="2026-07-10" location="Festningen, Bergen" />

      <div>
        <h1>Toggle Message Demo</h1>
        <ToggleMessage />
      </div>
      <div>
        <h1>Change Background Color</h1>
        <BackgroundColorChanger />
      </div>
      <div>
        <h1>Loading Indicator Demo</h1>
        <LoadingIndicator />
      </div>
      <div>
        <h1>Shop</h1>
        <ProductList />
      </div>
      <div>
        <h1>Lifting State Up Demo</h1>
        <SharedTextApp />
      </div>
      <div>
        <h1>Safe Counter</h1>
        <SafeCounter />
      </div>
      <div>
        <h1>useEffect Demo</h1>
        <InputLogger />
      </div>
      <div>
        <h1>MouseTracker Demo</h1>
        <button onClick={() => setShowTracker(!showTracker)}>
          Show/Hide Tracker
        </button>
        {showTracker && <MouseTracker />}
      </div>
      <div>
        <UserContext.Provider value={userName}>
          <Layout />
        </UserContext.Provider>
        <button onClick={() => setUserName('Kari Nordmann')}>
          Change User
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Demo;