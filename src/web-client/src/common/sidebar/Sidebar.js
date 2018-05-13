import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from "material-ui/styles/index";
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

const drawerWidth = 240;

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    logo: {
        padding: '20px',
        textAlign: 'center',
        fontSize: '1.3rem'
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            // position: 'relative'
        },
    },
    menuButton: {
        width: '100%',
        justifyContent: 'left'
    },
    leftIcon: {
        marginRight: theme.spacing.unit
    }
});

class Sidebar extends React.Component {
    render() {
        const {classes, theme} = this.props;
        const drawer = (
            <div>
                <div className={classes.toolbar}>
                    <div className={classes.logo}>Map Tracker</div>
                </div>
                <Divider/>
                <Button className={classes.menuButton}>
                    <Icon className={classes.leftIcon}>send</Icon>
                    <Link to="/">Home</Link>
                </Button>
                <Divider/>
                <Button className={classes.menuButton}>
                    <Icon className={classes.leftIcon}>send</Icon>
                    <Link to="/category">Category</Link>
                </Button>
                <Divider/>
            </div>
        );

        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.props.mobileOpen}
                        onClose={this.props.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Sidebar);
