module.exports = {
  distDir: 'out',
  trailingSlash: true,
  output: 'export',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
};
