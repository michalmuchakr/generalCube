import React from 'react';
import loader from 'assets/loader.gif';

function Loader({ hiddenLoader }) {
  return (
    <div className={ `loader ${hiddenLoader && 'hidden'}` }>
      <div className="loader_content">
        <img src={ loader }  alt="loader" />
        <h2>Loading</h2>
      </div>
    </div>
  )
}

export default Loader;
