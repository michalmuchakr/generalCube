import React from 'react'

function SocialBtns({socialBtns}) {
  return (
    <div className="socialButons">
      {socialBtns.map((item, idx) => {
        return <a className='socialButons-link'
                  data-aos="fade-zoom-in"
                  data-aos-delay={`${eval(idx * 500)}`}
                  href={item.type ? `mailto:${item.path}` : item.path}
                  key={idx}
                  target='_blank' rel="noopener" >
                <img src={item.ico} alt='logo' className='w-100'/>
              </a>
        })
      }
    </div>
  )
}

export default SocialBtns;
