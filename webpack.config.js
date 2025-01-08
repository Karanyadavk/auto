module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|webp|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };
  