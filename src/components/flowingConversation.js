import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import FlowingConversationImage from '../assets/illustration-flowing-conversation.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 50,
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
        height: 500,
        [theme.breakpoints.down('lg')]: {
            height: 400
        },
        [theme.breakpoints.down('md')]: {
            height: 300
        },
        [theme.breakpoints.down('sm')]: {
            height: 250
        },
        [theme.breakpoints.down('xs')]: {
            height: 220
        },
    }
    
}))

const TextComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} className={classes.gridItem}>
            <Box p={2}>
                <Typography className={classes.titleText}><b>Flowing Conversations</b></Typography>
                <br/>
                <Typography variant='subtitle2' className={classes.descriptionText}>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</Typography>
            </Box>
        </Grid>
    )
}

const ImageComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} className={classes.gridItem}>
            <Box p={4} display='flex' alignItems='center' justifyContent='center'>
                <img src={FlowingConversationImage} alt='' className={classes.image}/>
            </Box>
        </Grid>
    )
}


const FlowingConversation = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}> 
                <Grid container spacing={4}>
                    <ImageComponent />
                    <TextComponent />
                </Grid>
            </Box>
        </>
    )
}

export default FlowingConversation;