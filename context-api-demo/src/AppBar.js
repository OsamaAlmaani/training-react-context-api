import React, { Component } from 'react';
import UserBadge from './UserBadge';

export default class AppBar extends Component {
    render() {
        return (
            <div>
                <UserBadge />
            </div>
        )
    }
}
