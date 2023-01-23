// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Find the project and workspace directories
const projectRoot = __dirname;

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  asyncRequireModulePath: require.resolve("@expo/metro-runtime/async-require"),
};

config.server = {
  ...config.server,
  experimentalImportBundleSupport: true,
};

config.watcher = {
  // +73.3
  ...config.watcher,
  healthCheck: {
    enabled: true,
  },
};

module.exports = config;
