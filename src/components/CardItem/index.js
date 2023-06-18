// Write your code here.
import './index.css'
const CardItem = props => {
  const {cardDetails} = props
  const {className, description, imgUrl, title} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="imgContainer">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
