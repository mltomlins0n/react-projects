import classes from './Card.module.css';

function Card(props) {
  return (
    //content passed from whatever this component wraps around
    <div className={classes.card}>
      {props.children}
    </div>
  )
}

export default Card;