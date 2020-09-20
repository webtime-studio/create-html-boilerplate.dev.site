module.exports = {
  presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  plugin: [
    "babel-plugin-styled-components",
    {
      ssr: true,
      displayName: true,
      fileName: true,
    },
  ],
};
