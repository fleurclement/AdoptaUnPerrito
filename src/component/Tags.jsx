import React from 'react'
import { Badge } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

const Tags = ({tags}) => {
  return (
    <div>
      {
        tags.map((tag)=> (
            <Badge bg={tag.color} className='me-1'>{tag.text}</Badge> 
         ))
      }
    </div>
  )
}

export default Tags
