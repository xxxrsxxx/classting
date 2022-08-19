export default {
  plugins: [
    {
      plugin: require("craco-alias"),
      options: {
        source: "tsconfig",
        tsConfigPath: "./tsconfig.json",
      },
    },
  ],
};
