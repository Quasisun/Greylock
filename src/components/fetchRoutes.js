var $ = require('jquery');

export function fetchRoutes(addresses, callback) {
  console.log('fetching routes...');

  $.getJSON('/compute_routes.json', {
    addresses: JSON.stringify(addresses),
  }, function(data) {
    console.log('Received data from the server: ');
    console.log(data);
    callback(data)
  });
}
