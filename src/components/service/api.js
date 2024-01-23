import axios from 'axios'


export const authenticateSignup=async (data)=>{
    try{
       
    return  await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`,data)

    }

    catch(err){
       
        console.log('Error while calling signUp api'+err.message)
    }
}

export const authenticatelogin=async (data)=>{
    try{
       
    return  await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,data)

    }

    catch(err){
       
        return err.response;
    }
}