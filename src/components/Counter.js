export default function Counter(props) {
  const { text, count, className } = props
  const textContent = text + " " + count

  return (
    <span className={className + " counter"}>{textContent}</span>
  )
}
