import React from 'react';
import {withStyles} from 'material-ui/styles';

import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';
import GoogleMapLocation from '../google_map_location/GoogleMapLocation';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth
        },
        marginTop: 50
    }
});

class Home extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header handleDrawerToggle={this.handleDrawerToggle}/>
                <Sidebar handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen}/>
                <main className={classes.content}>
                    <GoogleMapLocation />
                </main>
            </div>
        );
    }
}


export default withStyles(styles, {withTheme: true})(Home);
