import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import Homepage from './Home/Homepage';
import allCommands from '../../commandsData/allCommands';
import CommandPage from './CommandPage';
export default function Routes() {
  useEffect(() => {
    console.log('routes rendered');
    return () => {};
  }, []);

  console.log(allCommands);

  const renderCommandTypes = () => {
    return Object.values(allCommands).map((commandType) => {
      return (
        <Route
          exact
          path={`/${commandType.name}`}
          render={(props) => <CommandPage {...props} data={commandType} />}
        />
      );
    });
  };

  return (
    <Switch>
      <Layout>
        {/* <Route path='/about' component={About} />
        <Route
          path='/plants/:id'
          render={({ match }) => {
            // Do whatever you want with the match...
            return <PlantPage id={match.params.id} />;
          }}
        />

        <Route path='/plants' component={Plants} /> */}

        {renderCommandTypes()}
        <Route exact path='/' component={Homepage} />
      </Layout>
    </Switch>
  );
}
