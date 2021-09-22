import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import GrowTogetherImage from '../assets/illustration-grow-together.svg';
import DesktopTopBgImage from '../assets/bg-section-top-desktop-1.svg';
import MobileTopBgImage from '../assets/bg-section-top-mobile-1.svg';
import DesktopBottomBgImage from '../assets/bg-section-bottom-desktop-1.svg';
import MobileBottomBgImage from '../assets/bg-section-bottom-mobile-1.svg';

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
        paddingRight: 200,
        [theme.breakpoints.down('lg')]: {
            paddingRight: 0,
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
    },
    image: {
        height: 600,
        [theme.breakpoints.down('lg')]: {
            height: 500
        },
        [theme.breakpoints.down('md')]: {
            height: 400
        },
        [theme.breakpoints.down('sm')]: {
            height: 300
        },
        [theme.breakpoints.down('xs')]: {
            height: 250
        },
    }
    
}))

const TextComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} className={classes.gridItem}>
            <Box p={2}>
                <Typography className={classes.titleText}><b>Grow Together</b></Typography>
                <br/>
                <Typography variant='subtitle2' className={classes.descriptionText}>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</Typography>
            </Box>
        </Grid>
    )
}

const ImageComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} className={classes.gridItem}>
            <Box p={4} display='flex' alignItems='center' justifyContent='center'>
                <img src={GrowTogetherImage} alt='' className={classes.image}/>
            </Box>
        </Grid>
    )
}


const GrowTogether = () => {
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

export default GrowTogether;