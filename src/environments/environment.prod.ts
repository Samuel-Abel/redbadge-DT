export const environment = {
  production: true,
  API_KEY: "AIzaSyAVOiIQKnLWfWrYJVdjYyKHmnTEcg4K1_Q"
};
export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'daytrippin-client.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://daytrippin-server.herokuapp.com'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:3000'
}