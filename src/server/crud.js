import axios from "axios"

export const adduser =async(data)=>{
    try{
        return await axios.post("http://localhost:3001/users",data)
    }
    catch(err){
        console.log(err.message)
    }
}

export const getuser =async()=>{
    try{
        return await axios.get("http://localhost:3001/users")
    }
    catch(err){
        console.log(err.message)
    }
}

export const getSingleuser =async(id)=>{
    try{
        return await axios.get(`http://localhost:3001/users/${id}`)
    }
    catch(err){
        console.log(err.message)
    }
}


export const editUser=async(data,id)=>{
    try{
        return await axios.put(`http://localhost:3001/users/${id}`,data)
    }
    catch(err){
        console.log(err.message)
    }
}


export const deleteuser =async(id)=>{
    try{
        return await axios.delete(`http://localhost:3001/users/${id}`)
    }
    catch(err){
        console.log(err.message)
    }
}