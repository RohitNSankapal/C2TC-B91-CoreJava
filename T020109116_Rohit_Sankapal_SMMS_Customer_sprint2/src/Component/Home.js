import React,{useState, useEffect} from 'react';
import CustomerService from '../Service/CustomerService';
function Home()
{
    const [customers,setPro]=useState([]);

    useEffect(()=>{
        getAllCustomers()
    },[])

    const getAllCustomers=()=>{
        CustomerService.getAllCustomers()
        .then((res)=>{
            setPro(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <main>
                <table cellSpacing={30} style={{marginLeft: '60%', border:'5px solid gray',borderRadius:'25px'}}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th >Address</th>
                    
                </tr>
                {
                    customers?.map(post=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.email}</td>
                            <td>{post.phoneNumber}</td>
                            <td>{post.adress}</td>
                        </tr>
                         
                ))
                } 
                </table>
            
            
        </main>
    );
}
export default Home;