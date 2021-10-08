import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import ContentLayout from './components/layout/ContentLayout';

function App() {
  return (
    <ContentLayout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favourites'>
          <Favourites />
        </Route>
      </Switch>
    </ContentLayout>
  );
}

export default App;
