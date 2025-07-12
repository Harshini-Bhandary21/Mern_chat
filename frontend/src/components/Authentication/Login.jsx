import React from 'react'
import { Button, InputGroup, VStack } from "@chakra-ui/react"
import { Field, Input } from "@chakra-ui/react"
import { useState } from 'react';
import { PasswordInput } from "../ui/password-input"

function Login() {
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
    
        
    
            <Button colorPalette={'purple'} width="100%" style={{marginTop:15}} 
                onClick={submitHandler}
            >
                Login
            </Button>

            <Button variant="solid" colorPalette={'yellow'} width="100%" style={{marginTop:15}} 
                onClick={()=>{
                    setEmail("guest@emaple.com");
                    setPassword("123456");
                }}
            >
                Login as a Guest
            </Button>
    
        </VStack>
      )
}

export default Login