/*---
title: イベント
description: Map (and some other classes) emit events in response to user interactions or changes in state. Evented is the interface used to bind and unbind listeners for these events.
contentType: API
order: 8
layout: page
language:
- JavaScript
products:
- Geolonia Javascript API
---*/

import React from 'react';
import PageWrapper from '../../components/api/page-wrapper.js';

export default class Page extends React.Component {
    render() {
        return <PageWrapper {...this.props} />;
    }
}
