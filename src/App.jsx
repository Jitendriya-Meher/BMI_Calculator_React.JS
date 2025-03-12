import React, { useState } from 'react'

const App = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  const bmiCalculate = () => {
    const BMI = (weight / (height*height)).toFixed(2);

    setBmi(BMI);

    if( BMI < 18.5){
      setMessage('Underweight');
    }
    else if( BMI <= 24.9){
      setMessage('Normal Wight');
    }
    else if( BMI <= 29.9){
      setMessage('Overweight');
    }
    else{
      setMessage('Obesity');
    }

  }

  return (
    <div className=' relative min-h-screen w-screen flex justify-center text-white items-center bg-gradient-to-br from-gray-900 to-black'>

      <div className="">

        <h1 className=' text-4xl font-bold'>
          BMI CALCULATOR
        </h1>

        <div className=" mt-4 flex flex-col">

          <label htmlFor="weight" className=' text-2xl my-4'>Weight (Kg)</label>

          <input type="number" className=' bg-gray-800 rounded-md px-8 py-2' id='weight'
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          />

        </div>

        <div className=" mt-4 flex flex-col">

          <label htmlFor="height" className=' text-2xl my-4'>Height (Mtr)</label>

          <input type="number" className=' bg-gray-800 rounded-md px-8 py-2' id='height'
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          />

        </div>

        <div className="">
          <button className=' mt-8 bg-blue-800 py-2 text-2xl rounded-md w-full'
          onClick={bmiCalculate}
          >
            Calculate
          </button>
        </div>

        <div className=" mt-8 text-2xl bg-gray-800 px-8 py-4 rounded-md">
          <h2 className=' text-center'>
            BMI : {bmi}
          </h2>
          <h2 className=' text-center pt-2'>
            {bmi ? `${message}`:""}
          </h2>
        </div>

      </div>

      <p className=' absolute text-white/10 bottom-2 right-2'>
        Created By Jitendriya Meher
      </p>


    </div>
  )
}

export default App