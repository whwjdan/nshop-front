const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.API_URL,
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: instance
      }
    }
  }
}