---
title: スタイル仕様
# description: 'This specification defines and describes the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it.'
description: 'この仕様は、どのようなデータを描画するか、描画の順番、描画時のスタイルなど、地図の視覚的な外観を定義し記述するものです。'
contentType: specification
navOrder: 4
order: 1
layout: page
hideFeedback: true
products:
- Mapbox Style Specification
overviewHeader:
  title: スタイル仕様
  features: []
  ghLink: https://github.com/geolonia/ja-maplibre-gl-js/tree/main/src/style-spec
  changelogLink: https://github.com/geolonia/ja-maplibre-gl-js/blob/main/src/style-spec/CHANGELOG.md
---

<!-- A MapLibre style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a [JSON](http://www.json.org/) object with specific root level and nested properties. This specification defines and describes these properties. -->

スタイルとは、マップの視覚的な外観を定義するファイルで、どのデータを描画するか、どのような順序で描画するか、データを描画する際にどのようなスタイルにするかなどを定義します。スタイルは、特定のルートレベルおよびネストされたプロパティを持つ JSON です。このドキュメントでは、これらのプロパティを定義し、説明しています。

<!-- The intended audience of this specification includes:

- Advanced designers and cartographers who want to write styles by hand.
- Developers using style-related features of [MapLibre GL JS](https://github.com/maplibre/maplibre-gl-js) or the [MapLibre Maps SDK for Android](https://github.com/maplibre/maplibre-gl-native).
- Authors of software that generates or processes MapLibre styles. -->


<!-- ## Style document structure -->
<!-- ## スタイルドキュメントの構造 -->

<!-- A MapLibre style consists of a set of [root properties](/ja-maplibre-gl-js-docs/style-spec/root), some of which describe a single global property, and some of which contain nested properties. Some root properties, like [`version`](/ja-maplibre-gl-js-docs/style-spec/root/#version), [`name`](/ja-maplibre-gl-js-docs/style-spec/root/#name), and [`metadata`](/ja-maplibre-gl-js-docs/style-spec/root/#metadata), don't have any influence over the appearance or behavior of your map, but provide important descriptive information related to your map. Others, like [`layers`](/ja-maplibre-gl-js-docs/style-spec/layers) and [`sources`](/ja-maplibre-gl-js-docs/style-spec/sources), are critical and determine which map features will appear on your map and what they will look like. Some properties, like [`center`](/ja-maplibre-gl-js-docs/style-spec/root/#center), [`zoom`](/ja-maplibre-gl-js-docs/style-spec/root/#zoom), [`pitch`](/ja-maplibre-gl-js-docs/style-spec/root/#pitch), and [`bearing`](/ja-maplibre-gl-js-docs/style-spec/root/#bearing), provide the map renderer with a set of defaults to be used when initially displaying the map. -->
