var $ = require('jquery');

export function fetchRoutes(addresses) {
  console.log('fetching routes...');

  $.getJSON('/compute_routes.json', {
    addresses: JSON.stringify(addresses),
  }, function(data) {
    console.log('Received data from the server: ');
    console.log(data);
  });
}
