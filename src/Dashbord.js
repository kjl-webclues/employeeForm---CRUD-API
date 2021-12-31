import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Dashbord = () => {

    const [employee, setEmployee] = useState([])
    
    
    useEffect(() => {
        axios.get(`/employees`)
            .then((res) => {
            setEmployee(res.data)
            })
            .catch((err) => {
            console.log(err)
        })
    }, [])
    
    const deleteEmployee = (id) => {
        axios.delete(`/employees/${id}`)
            .then((res) => {
                // console.log('res', res)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }



    // const editEmployee = (id) => {
    //     axios.put(`/employees/${id}`, editEmployee)
    //         .then((res) => {
    //             setUpdateAt({updateAt: res.data.updateAt})
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     })
    // }
    
    return (        
        <>  
                  <div>                
                    <h1> Welcome to Dashbord</h1>            
                    <NavLink to="/"><button className='home'>Home</button></NavLink>
                    {/* <div>
                        <input className='search'  type="search" placeholder='Search Employee...' value={searchInput} onChange={(e) => dispatch(searchFilter(e.target.value))}/>
                    </div>                 */}
            </div>                                           
                
            {
                employee.map((elem, id) => {
                    return (
                        <div className='eachItem' key={elem._id}>                         
                           <p>{elem.name}</p>
                           <p>{elem.phone}</p>
                           <p>{elem.profession}</p>
                           <p>{elem.salary}</p>
                           <p>{elem.email}</p>
                           <p>{elem.password}</p>
                           <p>{elem.confirmpassword}</p>
                           <NavLink to={`/?id=${elem._id}`}><button className='editbtn'>Edit</button></NavLink>
                           <button className='delbtn' onClick={() => deleteEmployee(elem._id)} >Delete</button>                        
                        </div>                        
                    )
                })
            }                                    
        </>
    )
}
export default Dashbord
