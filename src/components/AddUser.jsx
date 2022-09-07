import React, { useState } from 'react'
import { Button, FormControl, FormGroup, Input, TextField} from '@mui/material'
import { adduser } from '../server/crud'
import { useNavigate } from 'react-router-dom'


const initialvalue = {
    name: "",
    email: "",
    phone: "",
    dob: ""
    
}
export const AddUser = () => {
    const [user, setuser] = useState(initialvalue)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        await adduser(user)
        navigate("/")
    }

    

    console.log(user)
    return (
        <FormGroup  >
            <h1>New User</h1>
            <FormControl style={{ width: "50%", margin: "auto", marginTop: "40px" }}>
                <TextField id="standard-basic" label="Name" variant="standard" name="name" onChange={(e) => handleChange(e)} />{" "}
                <TextField id="standard-basic" label="Email" variant="standard" name="email" onChange={(e) => handleChange(e)} />{" "}
                <TextField id="standard-number" type="number" label="Mobile No." variant="standard" name="phone" onChange={(e) => handleChange(e)} />{"  "}

                <Input style={{ width: "200px" }} type='date' name="dob" onChange={(e) => handleChange(e)} label="Dob"></Input>

                
                    {/* <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => handleChange(e)}
                    >
                        <FormControlLabel value="female" name="female" control={<Radio />}  label="Female" />
                        <FormControlLabel value="male" name='male' control={<Radio />}  label="Male" />

                    </RadioGroup> */}
                <div style={{margin:"20px",marginRight:"500px"}}>
                    <h4>Gender :</h4>
                    <input type='radio' onChange={(e) => handleChange(e)} name="gender" value="Female"/>
                    <labal>Female</labal>
                    <input type='radio' onChange={(e) => handleChange(e)} name="gender" value="Male"/>
                    <label>Male</label>
                </div>
                    {/* <Label></Label> */}

               

                <Button variant="contained" onClick={() => handleSubmit()} >Add User</Button>
            </FormControl>
        </FormGroup>
    )
}
