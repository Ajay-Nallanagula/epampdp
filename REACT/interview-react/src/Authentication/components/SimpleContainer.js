
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import { useAuthContext } from '../auth/AuthContext';

export default function SimpleContainer({ children }) {
    const context = useAuthContext()

    const handleLogout = () => {
        context.logOut()
    }

    const user = context.user

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                {user?.length > 0 && <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h3> Welcome {user}!!</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={handleLogout}>Logout</Button>
                    </Grid>
                </Grid>}
                {children}
            </Container>
        </React.Fragment>
    );
}