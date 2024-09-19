import React,{useState,useEffect} from 'react'
import Proser from '../Service/CustomerService'

function Add()
{
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [email,setEma]=useState("");
    const [phone_number,setPhone]=useState("");
    const [adress,setAdd]=useState("");
    const obj={
        id:id,
        name:name,
        email:email,
        phoneNumber:phone_number,
        adress:adress
        };
    const handelEve=(e)=>{
        e.preventDefault();
            Proser.createCustomers(obj)
            .then((res)=>{
                console.log(res);
                alert("data submitted")
                window.location.reload();


            
            })
            .catch(err=>{
                alert(err);
            })
        console.log(obj);   
    }

    // useEffect(()=>{
    //     Proser.createCustomers(obj)
    //     .then((res)=>{
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })

    // })

    return(
        <div id="con">
            <h2>Add Customer</h2>
            <form>
                <div>
                    <input placeholder="Enter customer Id" type='text' name='id' value={id} onChange={(e)=>setId(e.target.value)} /><br/>
                    <input placeholder="Enter customer Name" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                    <input placeholder="Example@gmail.com" type='text' name='email' value={email} onChange={(e)=>setEma(e.target.value)} /><br/>
                    <input placeholder="Enter 10digit number " type='number' name='phone_number' value={phone_number} onChange={(e)=>setPhone(e.target.value)} /><br/>
                    <input placeholder="Add Adress" type='text' name='adress' value={adress} onChange={(e)=>setAdd(e.target.value)} /><br/>
            
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Add;