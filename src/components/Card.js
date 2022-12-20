export default function Card(props) {
  const { image, text } = props
  return (
    <div className="card">
      <img src={image} />
      <span>{text}</span>
    </div>
  )
}
