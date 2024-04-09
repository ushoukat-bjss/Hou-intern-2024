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

function getAllTemperaturesPerMonth(temperatureData) {
  const months = [
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
  ];
  const allTemperatures = {};
  for (const month of months) {
    const monthData = temperatureData['Average Temperature in Houston'][month];
    console.log(monthData);
    console.log(month);
    if (!monthData) {
      allTemperatures[month] = [];
      continue;
    }
    allTemperatures[month] = monthData.data.map(
      (item) => item.temperature_fahrenheit
    );
  }
  return allTemperatures;
}

router.get('/average-temperatures-houston', async (req, res) => {
  try {
    const temperatureData = await loadTemperatureData();
    const allTemps = await getAllTemperaturesPerMonth(temperatureData);
    res.json(allTemps);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
