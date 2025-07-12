import React from 'react'
import { Container, Box, Text, Tabs} from '@chakra-ui/react' // used to keep web responsive.
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
import Login from '../Authentication/Login'
import SignUp from '../Authentication/SignUp'
function Homepage() {
  return (
    <Container maxW={'xl'} centerContent> 
      <Box display="flex" justifyContent="center" padding = {3} bg= {"white"} w= "100%"  m= "40px 0 15px 0" borderRadius="xl" borderWidth="1px">
        <Text fontSize="3xl" fontFamily="work sans" >Let's Connect</Text>
      </Box>

      <Box display="flex" justifyContent="center" bg="white" w="100%" p={4} borderRadius="xl" borderWidth="1px">
        <Tabs.Root defaultValue="Login" variant="plain">
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            <Tabs.Trigger value="Login">
              <LuUser />
              Login
            </Tabs.Trigger>
            <Tabs.Trigger value="SignUp">
              <LuUser />
              SignUp
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="Login">{<Login/>}</Tabs.Content>
          <Tabs.Content value="SignUp">{<SignUp/>}</Tabs.Content>
        </Tabs.Root>
      </Box>


    </Container>
  )
}

export default Homepage