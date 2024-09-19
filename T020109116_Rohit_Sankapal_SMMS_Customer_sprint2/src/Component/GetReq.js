import React,{useState, useEffect} from 'react';
import CustomerService from '../Service/CustomerService';
import {Link} from 'react-router-dom'
function Customer()
{
    const [customers,setPost]=useState([]);
    const [id,setid]=useState("");

    function del(id)
    {
        CustomerService.deleteCustomers(id)
            .then(res =>{
              setPost(res.data)
              window.location.reload();

            })
            .catch(err=>{
                console.log(err)
            })
        console.log(id+"Successfully deleted");
        
    }

    useEffect(()=>{
        CustomerService.getAllCustomers()
            .then(res =>{
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
    return(
        <div>
            <div id="na">
               
                    <Link to="/add" className='add btn'>ADD</Link>
                    OR Remove from hear
                    <select name="id" onChange={(e) => del(e.target.value)}>
    <option value="">Select</option>
    {
        customers?.map(post => (
            <option key={post.id} value={post.id}>{post.id}</option>    
        ))
    }
</select>

                
            </div>
            <main>
            <table cellSpacing={30}>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th >phoneNumber</th>
                        <th >Address</th>
                        <th>Operation</th> 
                    </tr>
                {
                    customers?.map(post=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.email}</td>
                            <td>{post.phoneNumber}</td>
                            <td>{post.adress}</td>
                            <td><Link to={'/upd/'+post.id} className='btn upd'>Update</Link></td>
                        </tr> 
                ))
                } 
                </table>
 
            </main>
        </div>
    );
}
export default Customer;