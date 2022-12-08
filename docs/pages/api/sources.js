/*---
title: ソース
description: ソースは、地図上にレンダリングされる地理的な特徴を指定します。ソースオブジェクトは Map#getSource から取得することができる。
contentType: API
order: 7
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
