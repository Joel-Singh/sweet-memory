export default function Card(props) {
  const { image, onClick, id } = props
  return (
    <img
      className="card"
      src={image}
      onClick={onClick}
      id={id}
    />
  )
}
