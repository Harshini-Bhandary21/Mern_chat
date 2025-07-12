import React from 'react'
import { Button, InputGroup, VStack } from "@chakra-ui/react"
import { Field, Input } from "@chakra-ui/react"
import { useState } from 'react';
import { PasswordInput } from "../ui/password-input"

function SignUp() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmpassword,setConfirmpassword] = useState();
    const [pic,setPic] = useState();

// if function is used in the tags but not declared then app crashes.
    const postDetail = (pics) => {};
    const submitHandler = ()=>{};
  return (
    <VStack spacing = "5px" color="black">
        <Field.Root id='first-name' required>
            <Field.Label>
                Name
                <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} />
        </Field.Root>

        <Field.Root id='email' required>
            <Field.Label>
                Email
                <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} />
        </Field.Root>

        <Field.Root id='password' required>
            <Field.Label>
                Password
                <Field.RequiredIndicator />
            </Field.Label>
            <PasswordInput placeholder ="Enter Your Password" type={"password"} onChange={(e)=>setPassword(e.target.value)} />
            
        </Field.Root>

        <Field.Root id='password' required>
            <Field.Label>
                Confirm Password
                <Field.RequiredIndicator />
            </Field.Label>
            <PasswordInput placeholder ="Confirm Your Password" type={"password"} onChange={(e)=>setConfirmpassword(e.target.value)} />
            
        </Field.Root>

        <Field.Root id='pic'>
            <Field.Label>
                Upload Your Picture
            </Field.Label>
            <Input
                type='file'
                p={1.5}
                accept="image/*"
                onChange={(e)=>postDetails(e.target.files[0])}
                />
            
        </Field.Root>

        <Button colorPalette={'purple'} width="100%" style={{marginTop:15}} 
            onClick={submitHandler}
        >
            Sign Up
        </Button>

    </VStack>
  )
}

export default SignUp

