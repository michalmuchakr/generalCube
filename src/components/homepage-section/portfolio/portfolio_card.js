import React from 'react';

function PortfolioCard({ item, idx }) {

  const containList = item.features || item.inColaboration;

  return (
    <div className={ `tab-pane fade ${idx === 0 ? 'active show' : '' }` } id={item.pill} role='tabpanel' aria-labelledby={item.pill}>
      <div className='portfolio-card card'>
        {containList &&
          <div className='portfolio-card-collapse collapse' id='funcionalityCollapse'>
              <ul className='list-group list-group-flush'>
                {item.features &&
                  item.features.map( (item, idx) => {
                    return <li key={ idx } className='list-group-item'>{item}</li>
                  })
                }
                {item.inColaboration &&
                  <li className='list-group-item'>
                    <a href={ item.inColaboration.link }>Developed with { item.inColaboration.companyName } </a>
                  </li>
                }
              </ul>
          </div>
        }

        <h5 className='card-header d-flex justify-content-between align-items-center'>
          <span>{ item.title }</span>
          
          <button className='portfolio-card-btn btn btn-outline-dark ml-auto rounded-0' 
            type='button' 
            data-toggle='collapse' 
            data-target='#funcionalityCollapse' 
            aria-expanded='false' 
            aria-controls='funcionalityCollapse'>
              Functionality included
          </button>
          <a className='portfolio-card-btn btn btn-outline-dark rounded-0' 
            href={item.link} 
            role='button' 
            target='_blank' 
            rel='noopener'>
              {item.live ? 'Visit page' : 'GIT repository'} </a>
        </h5>
        
        <div className='portfolio-img-wrap shadow'>
          <img className='card-img-top' src={ item.imgPath } alt='Card image cap' />
        </div>

        {item.desc &&
          <div className='card-body'>
            { item.desc }
          </div>
        }
      </div>
    </div>

  )
}

export default PortfolioCard;
