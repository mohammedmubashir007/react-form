import React, { useState } from 'react'
import './App.css'

function App() {


  const [formData, setformData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "online-mode", favCar: "" })

  console.log(formData);

  function changeHandler(e) {
    const { name, checked, value, type } = e.target
    setformData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }


  function submitHandler(e) {
    e.preventDefault()
    console.log("Finally printing data form: ");
    console.log(formData);
  }

  return (
    <div className='App'>

      <form onSubmit={submitHandler}>

        <input type="text" placeholder='first name' onChange={changeHandler} name='firstName' value={formData.firstName} />

        <br></br>
        <br></br>

        <input type="text" placeholder='last name' onChange={changeHandler} name='lastName' value={formData.lastName} />

        <br></br>
        <br></br>

        <input type="email" placeholder='email' onChange={changeHandler} name='email' value={formData.email} />

        <br></br>
        <br></br>

        <textarea
          placeholder='enter your comments here'
          name='comments'
          onChange={changeHandler}
          value={formData.comments}
          rows='2'
          col="5"
        />

        <br></br>
        <br></br>

        <input type='checkbox' onChange={changeHandler} name="isVisible" id='isVisible' checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am I Visible?</label>

        <br></br>
        <br></br>

        <input type='radio' onChange={changeHandler} name='mode' value="online-mode" id='online-mode' checked={formData.mode === "online-mode"} />
        <label htmlFor='online-mode'>Online Mode</label>

        <input type='radio' onChange={changeHandler} name='mode' value="offline-mode" id='ofline-mode' checked={formData.mode === "offline-mode"} />
        <label htmlFor='ofline-mode' >Offline Mode</label>


        <br></br>
        <br></br>

        <label value="favCar">Tell me your fav car </label>
        <select
          onChange={changeHandler}
          name="favCar"
          id='favCar'
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="thar">Thar</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
        </select>
        <br></br>
        <br></br>

        <input type='submit' value='submit' />

      </form>

    </div>
  )
}

export default App