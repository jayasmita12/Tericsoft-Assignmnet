import React, { useState, useEffect } from 'react'
import { Button, FormControl, FormGroup, Input, TextField } from '@mui/material'
import {  getSingleuser, editUser } from '../server/crud'
import { useNavigate, useParams } from 'react-router-dom'

const initialvalue = {
    name: "",
    email: "",
    phone: "",
    dob: "",

}
export const EditUser = () => {
    const [user, setuser] = useState(initialvalue)
    const navigate = useNavigate()
    const { id } = useParams()

    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        await editUser(user, id)
        navigate("/")
    }

    useEffect(() => {
        SingleUser()
    }, [])
    const SingleUser = async () => {
        let res = await getSingleuser(id)
        setuser(res.data)
    }


    console.log(user)
    return (
        <FormGroup  >
            <h2>Update User</h2>
            <FormControl style={{ width: "50%", margin: "auto", marginTop: "40px" }}>
                <TextField id="standard-basic" label="Name" variant="standard" name="name" onChange={(e) => handleChange(e)} value={user.name} />{" "}
                <TextField id="standard-basic" label="Email" variant="standard" name="email" onChange={(e) => handleChange(e)} value={user.email} />{" "}
                <TextField id="standard-number" type="number" label="Mobile No." variant="standard" name="phone" onChange={(e) => handleChange(e)} value={user.phone} />{"  "}

                <Input style={{ width: "200px" }} type='date' name="dob" onChange={(e) => handleChange(e)} label="Dob" value={user.dob}></Input>

                {/* <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />

                    </RadioGroup>
                </FormControl> */}
                <div style={{ margin: "20px", marginRight: "500px" }}>
                    <h4>Gender :</h4>
                    <input type='radio' onChange={(e) => handleChange(e)} name="gender" value="Female" />
                    <labal>Female</labal>
                    <input type='radio' onChange={(e) => handleChange(e)} name="gender" value="Male" />
                    <labal>Male</labal>
                </div>
                <Button variant="contained" onClick={() => handleSubmit()} >Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}
