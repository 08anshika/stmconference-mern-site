import axios from "axios";

const URL = 'https://stmconference.onrender.com';

export const addSpeaker = async(data)=>{

    try{
   return await axios.post(`${URL}/add-speaker`,data)
    }catch(error){
     console.log('Error while adding speaker Api ', error);
    }
}


export const getSpeakers = async()=>{
    try {
   return await axios.get(`${URL}/all-speakers`);
        
    } catch (error) {
        console.log('Error while getting users api', error);
    }
}

export const getSpeaker = async(id)=>{
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}

export const editSpeaker = async(speaker, id)=>{
    try {
        return await axios.put(`${URL}/${id}`,speaker);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}


export const deleteSpeaker = async(id)=>{

    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while deleting speaker api', error);
        
    }
}