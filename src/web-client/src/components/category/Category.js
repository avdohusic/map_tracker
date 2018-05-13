import React from 'react';
import {withStyles} from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';

import Config from '../../config/config';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth
        },
    },
    table: {
        marginTop: 30
    },
});

class Category extends React.Component {

    state = {
        url: Config.backendUrl,
        mobileOpen: false,
        data: []
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    _categoryUrl(){
        return this.state.url + 'categories';
    }

    componentDidMount() {
        fetch(this._categoryUrl())
            .then(response => response.json())
            .then(data => this.setState({ data : data }));
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header handleDrawerToggle={this.handleDrawerToggle}/>
                <Sidebar handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen}/>
                <main className={classes.content}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Category Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map(n => {
                                return (
                                    <TableRow key={n._id}>
                                        <TableCell component="th" scope="row">
                                            {n.name}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </main>
            </div>
        );
    }
}


export default withStyles(styles, {withTheme: true})(Category);