const BatteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 5, 2, 0, 4];

// Use reduce to sum all the numbers in batteryBatches
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

Module.exports = { totalBatteries };

