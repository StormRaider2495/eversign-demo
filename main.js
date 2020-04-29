// Initialize using api key
// const { Client } = require('eversign');
// const client = new Client(API_KEY, BUSINESS_ID);

document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    console.log('dom-content loaded');

    eversign.open({
        url: "https://arunitmazumdar.eversign.com/document/3248e2cca71a46db8f1a085d912b5a5d-9a7377ac430e489d8ed0d635fe698e47/sign",
        containerID: "container",
        width: 600,
        height: 600,
        events: {
            loaded: function () {
                console.log("loaded Callback");
            },
            signed: function () {
                console.log("signed Callback");
            },
            declined: function () {
                console.log("declined Callback");
            },
            error: function () {
                console.log("error Callback");
            }
        }
    });
});
