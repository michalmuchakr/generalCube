import React from 'react';
import testImg from 'assets/test.jpg';

function Carousel({ id, images }) {

  return (
    <div id={ id } className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {images.map( (_it, _idx) => {
          return  <li data-target={`#${ id }`} data-slide-to={_idx} className={ _idx===0 ? 'active' : ''} key={ _idx }/>
        } )
        }
      </ol>

      <div className="carousel-inner">
        {images.map( (item, _idx) => {
            return (
              <div className={ `carousel-item${_idx===0 ?' active' : ''} ` } key={ _idx }>
                <img className="d-block w-100" src={ item.imgPath } alt="First slide" />
              </div>
            )
          })
        }
      </div>

      {images.length > 1 &&
        <React.Fragment>
          <a className="carousel-control-prev" href={`#${ id }`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href={`#${ id }`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </React.Fragment>
      }
    </div>
  )
}

export default Carousel;
