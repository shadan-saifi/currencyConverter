import { useId, useState } from "react"


function InputBox({
    label,
    placeholder,
    amount,
    setAmount,
    currency,
    setCurrency,
    currencyOptions,
    readonly

}) {

    const varid = useId()

    return (
        <div className="flex flex-row item-center justify-between sm:w-[600px] w-[200px] bg-blue-400 p-[8px] h-24 my-1 rounded ">
            <div className="flex flex-col items-start justify-center grow ">
                <label htmlFor={varid} className="bg-red-400 w-12 px-1 rounded-md">{label}</label>
                <input
                    type="text"
                    className="sm:w-[400px] w-[200px] rounded-md px-2"
                    id={varid}
                    placeholder={placeholder}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    readOnly={readonly}
                />
            </div>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}
            className="max-h-[40px] rounded-md mt-1 bg-red-300 hover:bg-emerald-400 active:scale-95 " >
                {currencyOptions.map((currop) => (
                    <option key={currop} value={currop}>{currop}</option>

                ))}
            </select>
        </div>
    )
}
export default InputBox;