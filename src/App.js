import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { Provider as ReduxProvider } from 'react-redux';

import DashboardLayout from 'src/views/DashboardLayout/DashboardLayout';
import LoginView from 'src/views/auth/LoginView';
import RegisterView from 'src/views/auth/RegisterView';
import LoggerView from 'src/views/logger/Logger';
import NotFoundView from 'src/views/errors/NotFoundView';
import GitlabPage from 'src/views/gitlab/GitlabPage';
import TaigaPage from 'src/views/taiga/TaigaPage';
import SonarPage from 'src/views/sonar/SonarPage';

import theme from 'src/theme/theme';
import store from 'src/redux/store/store';
import { config } from 'src/services/config';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Router basename={process.env.PUBLIC_URL}>
            <DashboardLayout>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/logger" />
                </Route>
                <Route exact path="/login" component={LoginView} />
                <Route exact path="/register" component={RegisterView} />
                <Route exact path="/logger" component={LoggerView} />
                <Route exact path="/gitlab" component={GitlabPage} />
                <Route exact path="/taiga" component={TaigaPage} />
                <Route exact path="/sonar" component={SonarPage} />
                <Route exact path="/jenkins" component={() => window.location = `${config.URL}/jenkins`} />
                <Route path="/*" component={NotFoundView} />
              </Switch>
            </DashboardLayout>
          </Router>
        </ReduxProvider>
      </ThemeProvider>
    );
  }
}

export default App;
