var apiGatewayClient = require('./apiGatewayClient')
var sigV4Client = require('./sigV4Client')
var simpleHttpClient = require('./simpleHttpClient')
var utils = require('./utils')

module.exports = {
  core: {
    apiGatewayClientFactory: apiGatewayClient,
    sigV4ClientFactory: sigV4Client,
    simpleHttpClientFactory: simpleHttpClient,
    utils: utils
  }
}
