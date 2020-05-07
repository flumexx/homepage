/**
 * Globals
 * @type {string}
 */
const appName = "Nicolai-Harms";
const appVersion = "0.1.0";

/**
 * Elements
 *
 * @type {object}
 */
let nameElement = document.getElementsByClassName("appName");
let versionElement = document.getElementsByClassName("appVersion");

class App {
    constructor() {
        versionElement.value = appVersion;
        nameElement.value = appName;
        document.title = appName;

        console.log(appName + ": started with Version " + appVersion);
    }

    stop() {
        window.close();
    }

    error(message) {
        console.error(appName + ": " + message);
    }

    log(message) {
        console.log(appName + ": " + message);
    }
}

let app = new App();