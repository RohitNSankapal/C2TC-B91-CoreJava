import React,{useState,useEffect} from 'react'
import Proser from '../Service/CustomerService'
import { useParams } from 'react-router-dom';

function Upd()
{
    const { id } = useParams();
    const [ uid,setuid]=useState("");
    const [name,setName]=useState("");
    const [email,setEma]=useState("");
    const [phoneNumber,setPhone]=useState("");
    const [adress,setAdd]=useState("");
    const obj={
        id:uid,
        name:name,
        email:email,
        phoneNumber:phoneNumber,
        adress:adress
        };
    const handelEve=(e)=>{
        e.preventDefault();
        if(uid){
            Proser.updateCustomers(uid,obj)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        alert("Successfully Updated");
        console.log(obj);   
    }

    function getCustomersById(id){
        Proser.getCustomersById(id)
        .then((res)=>{
            setuid(res.data.catogery)
            setName(res.data.name)
            setEma(res.data.email)
            setPhone(res.data.phoneNumber)
            setAdd(res.data.adress)
            })

        .catch(err=>{
            console.log(err)
        })
    }

     // Get 'id' from the URL

    useEffect(() => {
        console.log(id)
        if (id) {
            setuid(id)
            getCustomersById(id); // Call the function with the id
        }
    }, [])

    return(
        <div id="con">
            <h2>Update Product</h2>
            <form>
                <div>
                     <input placeholder="Enter customer Id" type='text' name='id' value={uid} onChange={(e)=>setuid(e.target.value)} /><br/>
                    <input placeholder="Enter customer Name" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                    <input placeholder="Example@gmail.com" type='text' name='email' value={email} onChange={(e)=>setEma(e.target.value)} /><br/>
                    <input placeholder="Enter 10digit number " type='number' name='phone_number' value={phoneNumber} onChange={(e)=>setPhone(e.target.value)} /><br/>
                    <input placeholder="Add Adress" type='text' name='adress' value={adress} onChange={(e)=>setAdd(e.target.value)} /><br/>
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Upd;