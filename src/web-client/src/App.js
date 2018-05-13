import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Home from './components/home/Home';
import Category from './components/category/Category';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        backgroundColor: theme.palette.background.default,
    }
});

class App extends Component{
    render(){
        return(
            <div className={this.props.classes.root}>
                <Grid container spacing={0}>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/category' component={Category}/>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);