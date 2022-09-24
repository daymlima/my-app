import Card from "../Card/Card"

const CardList = (props) => (
    <div className='cards-list'>
      {props.cardListInfo.map((item) => (
        <Card title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  )

  export default CardList