import { useState } from "react"
import Alert from "../Alert/Alert"
import { professionsList } from "../../Mocks/professions"
import Card from "../Card/Card"
import "./form.css"

const Form = () => {
  const [data, setData] = useState({
    name: "",
    idNumber: "",
    profession: ""
  })
  const [alert, setAlert] = useState({ msg: "", error: false })
  const [correctData, setCorrectData] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      data.name[0] === " " ||
      data.name.length < 3 ||
      data.idNumber.length < 6 ||
      data.profession === ""
    ) {
      setAlert({
        msg: "Por favor chequea que la información sea correcta",
        error: true
      })
      setTimeout(() => {
        setAlert({})
      }, 3000)
      return
    }
    setAlert({ msg: "Tu registro fue realizado con exito", error: false })
    setTimeout(() => {
      setAlert({})
    }, 3000)

    setCorrectData(true)
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        {alert.msg && <Alert alert={alert} />}
        <h1>Cliente Nuevo</h1>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor='age'>Identificacion</label>
          <input
            type='text'
            id='idNumber'
            value={data.idNumber}
            onChange={(e) => setData({ ...data, idNumber: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor='profession'>Profesion</label>
          <select
            name='profession'
            id='profession'
            value={data.profession}
            onChange={(e) => setData({ ...data, profession: e.target.value })}
          >
            <option value=''>-- Selecciona Una Profesión</option>
            {professionsList.map((element) => (
              <option value={element} key={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
        <button>Registrarse</button>
      </form>
      {correctData && <Card data={data} />}
    </div>
  )
}

export default Form
