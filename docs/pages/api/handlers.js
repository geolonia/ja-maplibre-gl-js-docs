/*---
title: ユーザーインタラクションハンドラ
description: ハンドラを使用して、マウス操作、タッチ操作、その他のジェスチャーなど、さまざまな種類のインタラクティビティをマップに追加することができます。
contentType: API
order: 6
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
        return <PageWrapper {...this.props} />;
    }
}
