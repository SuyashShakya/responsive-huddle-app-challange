import React from 'react';
import Box from '@material-ui/core/Box';
import Button from'@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import HuddleLogo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
    logo : {
        height: 60,
        [theme.breakpoints.down('lg')]: {
            height: 50,
        },
        [theme.breakpoints.down('md')]: {
            height: 40,
        },
        [theme.breakpoints.down('sm')]: {
            height: 30,
        },
        [theme.breakpoints.down('xs')]: {
            height: 20,
        },
    },
    button: {
        borderRadius: 15
    },
    buttonText: {
        textTransform: 'none'
    }
}))

const Header = () => {
    const classes = useStyles()
    return(
        <Box display='flex' p={4} alignItems='center' justifyContent='space-between'>
            <img src={HuddleLogo} alt='' className={classes.logo} />
            <Button variant='outlined' color='primary' className={classes.button}> 
                <Typography variant='caption' color='primary' className={classes.buttonText}>
                    Try it free
                </Typography> 
            </Button>
        </Box>
    )
}

export default Header;