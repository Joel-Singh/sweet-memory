export default function Card(props) {
  const { image } = props
  return (
    <img className="card" src={image} />
  )
}
