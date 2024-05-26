import Tags from './Tags'

const MyCard = ({ imagen, title, description, tags }) => {
  return (
    <div className='card'>
        <img src={imagen} 
        alt={title}
        className='card-img-top'
        />
        <div className='card-body'>
            <h5 className='card-title'>{title} </h5>
            <p className='card-text'> {description} </p>
            <Tags tags={tags}/>

        </div>
      
    </div>
  )
}

export default MyCard
