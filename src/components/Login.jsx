import React, {useContext} from 'react'

import { Container, Grid, Box, Button } from '@mui/material'

import { Context } from '..'

export const Login = () => {
    const {auth, GoogleAuthProvider, signInWithPopup} = useContext(Context)

    const login = async () => {
        const provider = new GoogleAuthProvider()

        await signInWithPopup(auth, provider)
    }

    return (
        <Container>
            <Grid 
                container
                style={{
                    height: window.innerHeight - 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid
                    style={{
                        width: 400,
                        background: 'lightgray'
                    }}
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container> 
    )
}
