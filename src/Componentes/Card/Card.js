const Card = (props) => {
    return (  
        <div className="card 1">
        <div className="card_image">
        <img src= {props.imageUrl} /> </div>
        <div className="card_title title-white">
          <p>{props.title}</p>
        </div>
      </div>
    )
  }

  export default Card
  