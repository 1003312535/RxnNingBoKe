module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "components": "@/components",
        "router": "@/router",
        "assets": "@/assets",
        "network": "@/network"
      }
    }
  }
}