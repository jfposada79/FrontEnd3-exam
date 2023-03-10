import "./card.css"
const Card = ({ data }) => {
  const { name, idNumber, profession } = data

  return (
    <div className='card'>
      <h2>Los datos que ingresaste fueron:</h2>
      <p>{name}</p>
      <p>{idNumber}</p>
      <p>{profession}</p>
    </div>
  )
}

export default Card
