import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    buttonStyle: {
        borderRadius: 20,
        padding: 10,
        width: 200,
        backgroundColor: 'hsl(322, 100%, 66%)',
        marginTop: 30,
        marginBottom: 30
    },
    buttonText: {
        textTransform: 'none',
        color: '#ffff'
    },
}))

const GetStarted = () => {
    const classes = useStyles();
    return(
        <Box p={5} display='flex' flexDirection='column' alignItems='center'>
            <center><Typography variant='h5'><b>Ready To Build Your Community?</b></Typography></center>
            <Button variant='contained' className={classes.buttonStyle}>
                <Typography variant='caption' className={classes.buttonText}>
                    Get Started For Free
                </Typography>
            </Button>
        </Box>
    )
}

export default GetStarted;