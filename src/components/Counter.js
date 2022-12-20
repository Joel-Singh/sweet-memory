export default function Counter(props) {
  const { text, count, className } = props
  return (
    <span className={className}>{text + " " + count}</span>
  )
}