import "../styles/Button.css"

const Button = ({insert, target, classN}) => {
  return (
    <a href={target} className={classN}>{insert}</a>
  )
}
export default Button