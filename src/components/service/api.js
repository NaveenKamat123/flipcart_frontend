import axios from 'axios'
const URL='http://localhost:8000'

export const authenticateSignup=async (data)=>{
    try{
       
    return  await axios.post(`${URL}/signup`,data)

    }

    catch(err){
       
        console.log('Error while calling signUp api'+err.message)
    }
}

export const authenticatelogin=async (data)=>{
    try{
       
    return  await axios.post(`${URL}/login`,data)

    }

    catch(err){
       
        return err.response;
    }
}