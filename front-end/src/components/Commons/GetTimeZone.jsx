import React, {useState} from 'react';
import axios from 'axios';

const CountryTimeZone = () => {
  const [timeZone, setTimeZone] = useState('');
  const countryName = 'ghana';

  const fetchTimeZone = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);

      const country = response.data[0];
      const timeZone = country.timezones[0];
      setTimeZone(timeZone);
    } catch (error) {
      console.error('Error fetching time zone:', error);
    }
  };

  console.log('My Time================', fetchTimeZone);

  return (
    <div>
      <div>{timeZone && <p>Time Zone: {timeZone}</p>}</div>
    </div>
  );
};

export default CountryTimeZone;
