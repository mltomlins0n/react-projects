import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    console.log(props.title)
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </div>
    </div>
  );
}

export default Todo;