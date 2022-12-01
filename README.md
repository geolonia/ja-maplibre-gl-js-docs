# Geolonia Javascript API Documentation

## Requirements

* Node 16
* npm 8


## 開発環境の立ち上げ

依存関係をインストール

```bash
npm ci # install dependencies with npm
git submodule update --init # initialize maplibre-gl-js git submodule
```

ローカルでドキュメントサイトを立ち上げる
```bash
npm start
```

## 翻訳の更新

https://github.com/geolonia/ja-maplibre-gl-js が更新された場合は、 `git submodule update --remote` を実行して、ローカルの `maplibre-gl-js` を更新する。
再度、`npm start` すると翻訳が反映される。
