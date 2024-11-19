exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.e2e.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--window-size=1920,1080'
            ]
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 100000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    }
};