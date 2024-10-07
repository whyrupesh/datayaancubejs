cube(`SensorData`, {
    sql: `SELECT * FROM sensor_data`,
    
    measures: {
      temperature: {
        sql: `temperature`,
        type: `avg`,
      },
      humidity: {
        sql: `humidity`,
        type: `avg`,
      },
    },
  
    dimensions: {
      sensorId: {
        sql: `sensor_id`,
        type: `string`,
      },
      timestamp: {
        sql: `timestamp`,
        type: `time`,
      },
    },
  });
  