module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-regenerator',
      [
        '@babel/plugin-transform-object-rest-spread',
        {
          useBuiltIns: true,
          loose: true,
        },
      ],
      // Add other plugins if needed
    ],
  };
};
