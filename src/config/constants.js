const devConfig = {
    DB : 'web-monitoring-dev',
    JWT_SECRET: 'thisismysecret',
};

const testConfig = {
    DB : 'web-monitoring-test',
};

const prodConfig = {
    DB : 'web-monitoring-prod',
};

const defaultConfig = {
    PORT: process.env.PORT || 5000,
};

const envConfig = (env) => {
    switch(env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
};

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV)
}
