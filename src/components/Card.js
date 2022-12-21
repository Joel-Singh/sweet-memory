export default function Card(props) {
  const { image, onClick } = props
  return (
    <img
      className="card"
      src={image}
      onClick={onClick}
    />
  )
}
