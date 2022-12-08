/*---
title: イベント
description: Map（と他のいくつかのクラス）は、ユーザとのインタラクションや状態の変化に応じてイベントを発生させます。Evented は、これらのイベントのリスナーをバインドしたり、アンバインドしたりするために使われるインターフェースです。
contentType: API
order: 8
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
