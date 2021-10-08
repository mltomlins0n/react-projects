import { useContext } from 'react';

import FavouritesContext from '../store/FavouritesContext';
import MeetupList from '../components/meetups/MeetupList';

function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>Your favourites will appear here, go add some!</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>Favourites Page</h1>
      {content}
    </section>
  );
}

export default Favourites;