/* eslint-disable react-native/no-inline-styles */
// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from '../../../base/redux';
import { getUnreadCount } from '../../functions';

import styles from './styles';

/**
 * The type of the React {@code Component} props of {@link ChatCounter}.
 */
type Props = {

    /**
     * The value of to display as a count.
     */
    _count: number
};

/**
 * Implements a React {@link Component} which displays a count of the number of
 * unread chat messages.
 *
 * @extends Component
 */
class ChatAppCounter extends Component<Props> {

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        if (this.props._count <= 0) {
            return null;
        }
        const unreadNum = this.props._count < 99 ? Number(this.props._count) : '+99';

        return (
            <View
                style = { styles.countUnread }>
                <Text style = { [ styles.txtUnread, this.props._count > 99 && { fontSize: 9 } ] }>{unreadNum}</Text>
            </View>
        );
    }
}

/**
 * Maps (parts of) the Redux state to the associated {@code ChatCounter}'s
 * props.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _count: number
 * }}
 */
function _mapStateToProps(state) {
    return {
        _count: getUnreadCount(state)
    };
}

export default connect(_mapStateToProps)(ChatAppCounter);
