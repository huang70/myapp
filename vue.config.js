const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  devServer: {
    hot: true,
  },
  configureWebpack: {
    resolve: {
      symlinks: true,
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  // resolve: {
  //     // 在导入语句没带文件后缀时，webpack会自动按照顺序添加后缀名查找
  //     extensions: ['.js', '.vue', '.json'],
  //     // 配置别名
  //     alias: {
  //         'vue$': 'vue/dist/vue.esm.js',
  //         // 将项目根目录中，src的路径配置为别名@
  //         '@': resolve('src'),
  //     }
  // }
};
