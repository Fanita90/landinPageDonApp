import axios from 'axios'
import { HOST } from '../constants';

export const fetchTx = async (BranchID,OperationID) => {
    console.log({BranchID,OperationID});
    try{
        const response = await axios.post(`${HOST}/api/Tx/GetLastTx`,{OwnerID : BranchID ,OperationID : OperationID});
        console.log(response.data.data);
        return response.data.data;    
    } catch (err) {
    console.log(err.response);
  }
}