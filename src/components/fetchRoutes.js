var $ = require('jquery');

export function fetchRoutes(addresses, destination, callback) {
  console.log('fetching routes...');
  
  /*return {
    "paths": [[[[37, -120], [37.01, -120]], [[37.01, -120], [37.02, -120]]]],
    "points": [[37, -120], [37.01, -120]]
  };*/

  $.getJSON('/compute_routes.json', {
    addresses: JSON.stringify(addresses),
    destination: destination,
  }, function(data) {
    console.log('Received data from the server: ');
    console.log(data);
    callback(data)
  });
}
