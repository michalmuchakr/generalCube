import React from 'react'

function Lang() {
  return (
    <div className="headTitle__lang btn-group">
      <button type="button" className="btn btn-outline-secondary dropdown-toggle general-nav-element lang-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        English
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <button className="dropdown-item" type="button">Polish</button>
        <button className="dropdown-item" type="button">Russian</button>
        <button className="dropdown-item" type="button">German</button>
      </div>
    </div>
  )
}

export default Lang
