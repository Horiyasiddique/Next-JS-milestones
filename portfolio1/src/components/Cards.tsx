import React from 'react'


interface cardProps {
    service: string,
    description: string
}
function Cards({service,description}:cardProps) {
  return (
    <div id='serv-cards'>
        <div id='service-head'>
            {service}
        </div>

        <div id='service-description'>
            {description}
        </div>
      
    </div>
  )
}

export default Cards
