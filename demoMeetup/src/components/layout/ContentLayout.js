import MainNav from './MainNav';
import classes from './ContentLayout.module.css';

function ContentLayout(props) {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default ContentLayout;