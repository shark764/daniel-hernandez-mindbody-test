import Form from './components/Form';
import { DateTime, Settings } from 'luxon';
import './styles.css';

const zones = [
  'America/Denver',
  'Europe/Paris',
  'America/Los_Angeles',
  'America/New_York',
  'Asia/Tokyo',
  'America/El_Salvador',
  'system',
];

function App() {
  const dateTime = DateTime.local();
  console.log(
    'Configured defaultZoneName',
    Settings.defaultZone,
    dateTime.toISO()
  );

  const handleChangeTimezone = (e) => {
    console.log('before', DateTime.local().toISO());
    Settings.defaultZone = e.target.value;
    console.log('after', DateTime.local().toISO());
  };

  return (
    <div>
      <Form />

      <select
        name="timezone"
        id="timezone"
        value={Settings.defaultZone.name}
        onChange={handleChangeTimezone}
      >
        {zones.map((zone) => {
          return (
            <option value={zone} key={zone}>
              {zone}
            </option>
          );
        })}
      </select>

      <span>{dateTime.toISO()}</span>
    </div>
  );
}

export default App;
