const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        //marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        marketing: `promise new Promise(resolve => {

    // TODO: in node  0 need to store this in global, so that we only need to load it once
    var mapUrl = "/public/map.config.json";
    fetch(mapUrl).then(function(response) {
      response.json().then(function(data) {

        var  marketingUrl = data.marketing.localhost.href;
        const script = document.createElement('script')
        script.src = marketingUrl
        script.onload = () => {
            // the injected script has loaded and is available on window
            // we can now resolve this Promise
            const proxy = {
                get: (request) => window.marketing.get(request),
                init: (arg) => {
                    try {
                        return window.marketing.init(arg)
                    } catch(e) {
                        console.log('remote container already initialized')
                    }
                }
            }
            resolve(proxy)
        }
        // inject this script with the src set to the versioned remoteEntry.js
        document.head.appendChild(script);
      });
    }
  )
         






      })
      `,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
