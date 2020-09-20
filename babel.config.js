module.exports = {
  presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  plugins: [
    "babel-plugin-styled-components",
    {
      ssr: true,
      displayName: true,
      fileName: true,
    },
  ],
};
