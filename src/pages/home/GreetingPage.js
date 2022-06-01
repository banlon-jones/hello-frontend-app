import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GreetingPage.css';
import { getGreetings } from '../../redux/messages/greetingReducer';

function GreetingPage() {
  const dispatch = useDispatch();
  const book = useSelector(({ greetingReducer }) => greetingReducer);

  return (
    <div className="books-container">
      <div className="greet">
        {book.message}
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(getGreetings())}
          >
            Greet again
          </button>
        </div>
      </div>
    </div>
  );
}

export default GreetingPage;
