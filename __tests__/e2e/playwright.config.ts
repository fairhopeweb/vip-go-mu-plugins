/**
 * External dependencies
 */
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    retries: 1,
    globalSetup: require.resolve( './lib/global-setup' ),
    timeout: 120000,
    reporter: process.env.CI ? 'github' : 'list',
    reportSlowTests: null,
    workers: 4,
    use: {
        headless: true,
        viewport: { width: 1280, height: 1000 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        storageState: 'e2eStorageState.json',
        baseURL: process.env.E2E_BASE_URL ? process.env.E2E_BASE_URL : 'http://e2e-test-site.vipdev.lndo.site',
    },
};

export default config;