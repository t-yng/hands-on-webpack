// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development'

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = (MODE === 'development')

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // バンドルのエントリーポイントとなるJSファイルを指定
  // 指定しない場合は「./src/index.js」が自動的に対象となる
  entry: './src/js/index.js',

  // バンドルの出力先を指定する
  // 出力先を指定しない場合は「./dist/main.js」に自動で出力される
  // 今回は明示的に書いてあるだけで、指定しない場合と出力先は同じ
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },

  module: {
    rules: [
      // CSSファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.css/,
        // ローダー名
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // CSSの空白文字を削除する
              minimize: true,
              // ソースマップを有効にする
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ]
  }
}