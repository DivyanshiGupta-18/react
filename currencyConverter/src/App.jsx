import { useState } from 'react'
import { InputBox } from './assets/component'
import useCurrencyInfo from './assets/hooks/useCurrencyinfo'
import './App.css'

function App() {
const[amount, setAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const[convertedAmount, setConvertedAmounted] = useState("")

const currencyInfo = useCurrencyInfo(from)

const  options = Object.keys(currencyInfo)

const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () => {
  setConvertedAmounted(amount * currencyInfo[to])
}

return (
  <div
      className="w-100 h-screen d-flex flex-wrap justify-center align-items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
  >
      <div className="w-100">
          <div className="w-100 mx-auto border rounded p-5 text-dark" style={{ maxWidth: '768px', backdropFilter: 'blur(10px)'}} >
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-100 mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setAmount(amount)}
                          selectCurrency={from}
                          onAmountChange={(amount) => setAmount(amount)}
                      />
                  </div>
                  <div className="position-relative w-100 ">
                      <button
                          type="button"
                          className="position-absolute start-50 translate-middle border border-white rounded bg-primary text-white px-2 py-1"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-100 mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={from}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-100 px-4 py-3 rounded-3" style={{color:'white', backgroundColor:'blue'}}>
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App