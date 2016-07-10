var $ = require('jquery');

export function fetchRoutes(addresses, callback) {
  console.log('fetching routes...');

  return {
    "paths": [[
      [37.3938135, -122.0789624],
      [37.39337829999999, -122.0778606]
     ]],
     "points": [
      [37.3938135, -122.0789624],
      [37.39337829999999, -122.0778606]
     ]}

  $.getJSON('/compute_routes.json', {
    addresses: JSON.stringify(addresses),
  }, function(data) {
    console.log('Received data from the server: ');
    console.log(data);
    callback(data)
  });
}
