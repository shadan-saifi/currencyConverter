import { useState } from 'react'

import './App.css'
import InputBox from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState('')
  const [amountConverted, setAmountConverted] = useState('')
  const [currency, setCurrency] = useState('usd')
  const [currency2, setCurrency2] = useState('inr')
  
  const [data, error, loading] = useCurrencyInfo(currency)
  console.log('data', data);
  console.log('currency', currency);
  

  const currencyOption = Object.keys(data)
  const convert=()=>{
         const finalconvert=amount*(data[currency2])
         setAmountConverted(finalconvert)

  };
  const swap=()=>{
         setCurrency(currency2)
         setCurrency2(currency)
         setAmount(amountConverted)
         setAmountConverted(amount)
  }



  return (
    <>
      <div>
        <h1 className='text-2xl p-4 font-semibold text-red-700'>Currency Converter</h1>
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()}}
          className='relative flex  items-center flex-col'>
          <div>
            <InputBox label='From' placeholder='Enter Amount....' amount={amount} setAmount={setAmount}
              currency={currency} setCurrency={setCurrency} currencyOptions={currencyOption} />
          </div>
          <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 w-[90px] px-3 py-1 mb-4 rounded-lg ' type='button' onClick={swap} >Swap</button>
          <div>
            <InputBox label='To' placeholder='Converted Amount....' amount={amountConverted} setAmount={setAmountConverted}
              currency={currency2} setCurrency={setCurrency2} currencyOptions={currencyOption} readonly />
          </div>
          <div className='rounded-md relative'>
          <button type='submit' className=' bg-red-400 w-[90px] px-3 py-1 mb-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' >Convert</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
