import React from 'react';

function Accordion({ id, items }) {
  return (
    <div className="accordion mt-3" id={ id }>
      {items.map((item, index) => {
        return (
          <div className="card" key={ index }>
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  { item.title }
                </button>
              </h5>
            </div>
            <div id="collapseOne" className={ `collapse ${index === 0 ? 'show' : ''}` } aria-labelledby="headingOne" data-parent={ `#${id}` }>
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        )}
      )}
    </div>
  )
}

export default Accordion;
