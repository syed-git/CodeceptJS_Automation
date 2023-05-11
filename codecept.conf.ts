import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  timeout: 300,
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      windowSize: "1280x960",
      waitForNavigation: "networkidle0",
      waitForAction: 500
    },
    PageInteractionHelper: {
      require: "./helpers/page-interaction_helpers.js"
    },
    PageValidationsHelper: {
      require: "./helpers/page-validation_helpers.js"
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'CodeceptJS_Automation'
}