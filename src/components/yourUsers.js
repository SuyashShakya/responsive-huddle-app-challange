import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import YourUsersImage from '../assets/illustration-your-users.svg';
import DesktopTopBgImage from '../assets/bg-section-top-desktop-2.svg';
import MobileTopBgImage from '../assets/bg-section-top-mobile-2.svg';
import DesktopBottomBgImage from '../assets/bg-section-bottom-desktop-2.svg';
import MobileBottomBgImage from '../assets/bg-section-bottom-mobile-2.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'hsl(207, 100%, 98%)',
        padding: 50,
        marginTop: -10
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 48,
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
            textAlign: 'center'
        },
    },
    descriptionText: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
    },
    image: {
        height: 500,
        [theme.breakpoints.down('md')]: {
            height: 400
        },
        [theme.breakpoints.down('sm')]: {
            height: 300
        },
        [theme.breakpoints.down('xs')]: {
            height: 240
        },
    }
    
}))

const TextComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} className={classes.gridItem}>
            <Box p={2}>
                <Typography className={classes.titleText}><b>Your Users</b></Typography>
                <br/>
                <Typography variant='subtitle2' className={classes.descriptionText}>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</Typography>
            </Box>
        </Grid>
    )
}

const ImageComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} className={classes.gridItem}>
            <Box p={4} display='flex' alignItems='center' justifyContent='center'>
                <img src={YourUsersImage} alt='' className={classes.image}/>
            </Box>
        </Grid>
    )
}


const YourUsers = () => {
    const classes = useStyles();
    return (
        <>
            <Hidden smDown>
                <img src={DesktopTopBgImage} alt='' width='100%' />
            </Hidden>
            <Hidden mdUp>
                <img src={MobileTopBgImage} alt='' width='100%' />
            </Hidden>
            <Box className={classes.root}> 
                <Grid container spacing={4}>
                    <Hidden mdUp>
                        <ImageComponent />
                        <TextComponent />
                    </Hidden>
                    <Hidden smDown>
                        <TextComponent />
                        <ImageComponent />
                    </Hidden>    
                </Grid>
            </Box>
            <Hidden smDown>
                <img src={DesktopBottomBgImage} alt='' width='100%' />
            </Hidden>
            <Hidden mdUp>
                <img src={MobileBottomBgImage} alt='' width='100%' />
            </Hidden>
        </>
    )
}

export default YourUsers;