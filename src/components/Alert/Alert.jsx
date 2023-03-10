import "./alert.css"

const Alert = ({ alert }) => {
  return <div className={alert.error ? "alertError" : "alert"}>{alert.msg}</div>
}

export default Alert
