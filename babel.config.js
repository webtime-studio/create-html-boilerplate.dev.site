module.exports = {
  presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  plugins: [
    require.resolve("babel-plugin-styled-components"),
    {
      ssr: true,
      displayName: true,
      fileName: true,
    },
  ],
};
