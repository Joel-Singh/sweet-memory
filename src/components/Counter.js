export default function Counter(props) {
  const { text, count, className, isFlashing } = props
  const textContent = text + " " + count

  return (
    <span
      className={
        className +
        " counter" +
        (isFlashing ? " flash" : "")
      }
    >{textContent}</span>
  )
}
