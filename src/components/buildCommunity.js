import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mockupImage from '../assets/screen-mockups.svg';
import communityIcon from '../assets/icon-communities.svg';
import messageIcon from '../assets/icon-messages.svg'; 

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 42,
        marginTop: 50,
        marginBottom: 15,
        
        [theme.breakpoints.down('sm')]: {
            fontSize: 24,
        },
    },
    buttonStyle: {
        borderRadius: 25,
        backgroundColor: 'hsl(322, 100%, 66%)',
        marginTop: 30,
        marginBottom: 30,
        padding: 10,
        width: 250,
        '&:hover': {
            backgroundColor: 'hsl(321, 100%, 78%)',
        },

    },
    buttonText: {
        textTransform: 'none',
        color: '#ffff',
    },
    mockImage: {
        marginTop: 40,
        marginBottom: 30,
        [theme.breakpoints.down('lg')]: {
            height: 620
        },
        [theme.breakpoints.down('md')]: {
            height: 520
        },
        [theme.breakpoints.down('sm')]: {
            height: 420
        },
        [theme.breakpoints.down('xs')]: {
            height: 220
        },
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
}))

const BuildCommunity = () => {
    const classes = useStyles();
    const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Container maxWidth="lg">
            <Box display='flex' flexDirection='column'>
                <center><Typography className={classes.title}><b>Build The Community Your Fans Will Love</b></Typography></center>
                <Box px={!isSmallScreen ? 50 : 0}>
                    <center><Typography variant='subtitle2'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</Typography></center>
                </Box>    
                <center>
                    <Button variant='contained' className={classes.buttonStyle}>
                        <Typography className={classes.buttonText} variant='subtitle2'>
                            Get Started For Free
                        </Typography>
                    </Button>
                </center>
                <Box display='flex' justifyContent='center'>
                    <img src={mockupImage} alt='' className={classes.mockImage}/>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} className={classes.gridItem}>
                        <Box display='flex' flexDirection='column' alignItems='flex-start'>
                            <img src={communityIcon} alt='' height={20}/>
                            <Typography variant='h3'><b>1.4k+</b></Typography>
                            <Typography variant='body2'>Communities formed</Typography>
                        </Box>
                    </Grid>    
                    <Grid item xs={12} md={6} className={classes.gridItem}>
                        <Box display='flex' flexDirection='column' alignItems='flex-start'>
                            <img src={messageIcon} alt='' height={20}/>
                            <Typography variant='h3'><b>2.7m+</b></Typography>
                            <Typography variant='body2'>Messages sent</Typography>
                        </Box>
                    </Grid> 
                </Grid>    
            </Box> 
        </Container>
    )
}

export default BuildCommunity;