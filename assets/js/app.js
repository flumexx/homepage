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

/**
 * App class
 */
class App {
    /**
     * Initialize app
     */
    constructor() {
        versionElement.value = appVersion;
        nameElement.value = appName;
        document.title = appName;

        console.log(appName + ": started with Version " + appVersion);
    }


    /**
     * Logs error message
     *
     * @param message
     */
    error(message) {
        console.error(appName + ": " + message);
    }

    /**
     * Logs message
     *
     * @param message
     */
    log(message) {
        console.log(appName + ": " + message);
    }

    /**
     * Close the app
     */
    stop() {
        window.close();
    }
}

let app = new App();