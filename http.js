const axios = require('axios');

const fetchData = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log("Data received by API call.");
      return response.data;
    });
};

exports.fetchData = fetchData;
