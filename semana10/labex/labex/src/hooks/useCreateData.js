import {useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/url'

const useCreateData = (url, body, headerParam) => {

    const [data, setData] = useState(initialState)

    const header = {
        headers: headerParam
    }
    
    axios
    .post(`${BASE_URL}${url}`, body, header)
    .then((res) => {
        setData(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })

    return data;
}
export default useCreateData