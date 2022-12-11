const svgr = require("vite-plugin-svgr");

/** @type { import('@storybook/builder-vite').StorybookViteConfig } */
module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, svgr()],
      envPrefix: "APP",
    };
  },
};
