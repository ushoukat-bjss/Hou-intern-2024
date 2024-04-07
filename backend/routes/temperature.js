const express = require('express');
const fs = require('fs/promises');

const router = express.Router();

const temperatureDataFile =
  '/Users/john.ngo/Projects/weatherDashboard/src/data.json';

async function loadTemperatureData() {
  try {
    const data = await fs.readFile(temperatureDataFile, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading temperature data:', error);
    throw new Error('Failed to load temperature data');
  }
}

function getMonthlyAverageTemp(month, temperatureData) {
  const monthData = temperatureData['Average Temperature in Houston'][month];
  if (!monthData) {
    return null;
  }
  const temperatures = monthData.data.map(
    (item) => item.temperature_fahrenheit
  );
  return temperatures.reduce((acc, val) => acc + val, 0) / temperatures.length;
}

async function getAverageTempsOctMarch(temperatureData) {
  const months = [
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
  ];
  const averageTemps = {};
  for (const month of months) {
    averageTemps[month] = getMonthlyAverageTemp(month, temperatureData);
  }
  return averageTemps;
}

router.get('/average-temperatures-houston', async (req, res) => {
  try {
    const temperatureData = await loadTemperatureData();
    const averageTemps = await getAverageTempsOctMarch(temperatureData);
    res.json(averageTemps);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
