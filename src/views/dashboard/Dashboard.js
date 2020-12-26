import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Metrics from './Metrics';
import Plugins from './Plugins';
import Stats from './Stats';
import PieChart from './PieChart';
import Files from './Files';
import StaticDatePicker from './DatePicker';
import SimpleBackdrop from './SimpleBackdrop';

import { Redirect} from "react-router-dom";
import { connect } from "react-redux";
import {actionsCreator} from "src/redux/actions/actionsCreator"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

function  Dashboard(props) {
  const classes = useStyles();

  if(props.isLogged){

    return (
      <Page
        className={classes.root}
        title="Dashboard"
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <StaticDatePicker />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Metrics />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Stats />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <PieChart/>
            </Grid>
            <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
            >
            <Files />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <Plugins />
            </Grid>
          </Grid>
        </Container>
        <SimpleBackdrop/>
      </Page>
    );
  }
  else return <Redirect to='/login'/>;
};

function mapStateToProps(state){
  return {
    token: state.token,
    isLogged: state.isLogged };
};

const actions = {
  fetchActivities: actionsCreator.fetchActivities
}

export default connect(mapStateToProps,actions)(Dashboard);
