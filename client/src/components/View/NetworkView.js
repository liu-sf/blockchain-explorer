/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Peers from '../Lists/Peers';
import {
    getPeerList,
} from '../../store/selectors/selectors';
const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 42,
        position: 'relative',
    },
    card: {
        height: 250,
        minWidth: 1290,
        margin: 20,
        textAlign: 'left',
        display: 'inline-block',
    },
    title: {
        fontSize: 16,
        color: theme.palette.text.secondary,
        position: 'absolute',
        left: 40,
        top: 60
    },
    content: {
        fontSize: 12,
        color: theme.palette.text.secondary,
        position: 'absolute',
        left: 40,
        top: 70
    }
});

export class NetworkView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: 'Network',
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="view-fullwidth" >
                <div className="view-display">
                    <Peers peerList={this.props.peerList} />
                </div>
            </div>
        );
    }
}


NetworkView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect((state) => ({
    peerList: getPeerList(state)
})))(NetworkView);