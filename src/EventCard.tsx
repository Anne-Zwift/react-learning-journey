export interface EventProps {
  title: string;
  date: string;
  location: string;
}



function EventCard({ title, date, location }: EventProps) {
  return (
    <div style={{ border: '1px solid blue', borderRadius: '8px', margin: '0 auto', marginBottom: '12px', padding: '16px', maxWidth: '400px' }}>
      <h3>{title}</h3>
      <p style={{ color: "blue", background: 'yellow', padding: '10px' }}>Date: {date}</p>
      <p style={{ color: "blue" }}>Address: {location}</p>
    </div>
  );
}

export default EventCard