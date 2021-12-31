import { useFormik} from 'formik'
import { NavLink, useHistory } from 'react-router-dom'
import {useEffect} from 'react'
import queryString from 'query-string'
import axios from 'axios'
import {useState} from 'react'



const EmpForm = () => {
    const { id } = queryString.parse(window.location.search);
    console.log("id", id);
    const history = useHistory();
    const [employee, setEmployee] = useState([])

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            profession: "",
            salary: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
        validateOnBlur: true,
        onSubmit: (values) => {
            if (id) {
                axios.put(`/employees/${id}`, values)
                history.push('/dashbord')
            } else {
                axios.post('/employees', values)
                formik.handleReset()
                history.push('/dashbord')
            }
            
        }        
    });
    useEffect(() => {
        if (id) {
            axios.get(`/employees/${id}`)
            .then((res) => {
                setEmployee(res.data)
            })
            .catch(error => {
            console.log(error)
        })
        }            
    }, [])

    useEffect(() => {
        if (id && employee) {
            formik.setValues(employee)
        }
    }, [employee])
    
    
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <h1>Employee form</h1>
                    <input type="text"
                        name="name"
                        placeholder='Enter Employee Name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    /><br />
                    
                    <input type="number"
                        name="phone"
                        placeholder='Enter phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    /><br />
                    
                    <input type="text"
                        name='profession'
                        placeholder='Enter Profession'
                        onChange={formik.handleChange}
                        value={formik.values.profession}
                    /><br />
                    
                    <input type="number"
                        name='salary'
                        placeholder='Enter salary'
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                    /><br />
                    
                    <input type="text"
                        name='email'
                        placeholder='Enter Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    /><br />
                    
                    <input type="password"
                        name='password'
                        placeholder='enter password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    /><br />
                    
                    <input type="password"
                        name='confirmpassword'
                        placeholder='enter confirm password'
                        onChange={formik.handleChange}
                        value={formik.values.confirmpassword}
                    /><br />

                    {/* <button className='signin' type='submit'>Submit</button>
                    <button onClick={formik.handleReset} className='cancel' type='reset'>Cancel</button> */}
                    {!id ? (
                        <button className='signin' type='submit'>Submit</button>) :

                            (<button  className='signin' type='update'>Update</button>)}
                    
                    <button onClick={formik.handleReset} className='cancel' type='reset'>Cancel</button>
                </form>
                <NavLink to="/dashbord"><button className='dsb'>Dashbord</button></NavLink>
            </div>
        </>
    )
}

export default EmpForm



