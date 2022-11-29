import axios from 'axios';
//const API_BASE = 'https://tuiter-node-server-app-wdc.herokuapp.com/api';
const API_BASE = process.env.REACT_APP_API_BASE2;

const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    // The axis.post() function embeds the tuit parameter
    // in the body of the HTTP request and then POSTs it to TUITS_API.
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}