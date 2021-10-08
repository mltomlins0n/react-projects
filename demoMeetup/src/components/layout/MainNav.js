import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';
import FavouritesContext from '../../store/FavouritesContext';

function MainNav() {
  const favouritesCtx = useContext(FavouritesContext);

  return <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <span className={classes.pag}>pagMan</span>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>New Meetup</Link>
        </li>
        <li>
          <Link to='/favourites'>
            Favourites
            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
            </Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNav;