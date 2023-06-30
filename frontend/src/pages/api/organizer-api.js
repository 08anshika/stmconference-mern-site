import axios from "axios";


const URL = " http://localhost:9000";

export const addOrganizer = async(data)=>{

    try{
   return await axios.post(`${URL}/add-organizer`,data)
    }catch(error){
     console.log('Error while adding organizer Api ', error);
    }
}


export const getOrganizers = async()=>{
    try {
   return await axios.get(`${URL}/all-organizers`);
        
    } catch (error) {
        console.log('Error while getting organizers api', error);
    }
}

export const getOrganizer = async(id)=>{
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}

export const editOrganizer = async(organizer, id)=>{
    try {
        return await axios.put(`${URL}/${id}`,organizer);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}


export const deleteOrganizer = async(id)=>{

    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while deleting organizer api', error);
        
    }
}
