import axios from "axios";

const CUS_BASE_API='http://localhost:8081/customers';

class CustomerService
{
    getAllCustomers(){
        return axios.get(CUS_BASE_API);
    }

    getCustomersById(CustomersId){
        return axios.get(CUS_BASE_API+'/'+CustomersId);
    }

    createCustomers(Customers){
        return axios.post(CUS_BASE_API,Customers);
    }

    updateCustomers(CustomersID,Customers){
        return axios.put(CUS_BASE_API+'/'+CustomersID,Customers);
    }

    deleteCustomers(CustomersID){
        return axios.delete(CUS_BASE_API+'/'+CustomersID);
    }
}

export default new CustomerService();