/*---
title: マップ
description: Map オブジェクトは、ページ上のマップを表します。プログラムによってマップを変更するためのメソッドとプロパティを公開し、ユーザーがマップを操作するときにイベントを発生させます。
contentType: API
order: 2
layout: page
language:
- JavaScript
products:
- Geolonia JavaScript API
---*/

import React from 'react';
import PageWrapper from '../../components/api/page-wrapper.js';

export default class Page extends React.Component {
    render() {
        return <PageWrapper name="Map class" {...this.props} />;
    }
}
