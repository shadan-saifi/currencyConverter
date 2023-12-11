import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
                const data = await response.json()
                setData(data[currency])
                
            } catch (error) {
                setError(true)
                
            } finally{
                setLoading(false)
            }
        })()
    }, [currency])
return [data, error, loading]
}
export default useCurrencyInfo;