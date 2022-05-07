// Header for queries to the API
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');

// Route in which the requests are made
const apiPath = 'http://localhost:8080/api/todos';

export { headers, apiPath };
