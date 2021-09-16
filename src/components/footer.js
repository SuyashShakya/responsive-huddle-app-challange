import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden'
import DesktopFooterTop from '../assets/bg-footer-top-desktop.svg';
import MobileFooterTop from '../assets/bg-footer-top-mobile.svg';
import HuddleLogo from '../assets/logo2.svg';
import EmailIcon from '../assets/icon-email.svg';
import PhoneIcon from '../assets/icon-phone.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: -5,
        padding: 100,
        backgroundColor: 'hsl(192, 100%, 9%)',
        color: '#ffff',
        [theme.breakpoints.down('md')]: {
            padding: 20
        },
    },
    logo : {
        height: 60,
        marginBottom: 20,
        [theme.breakpoints.down('lg')]: {
            height: 50,
        },
        [theme.breakpoints.down('md')]: {
            height: 40,
        },
        [theme.breakpoints.down('sm')]: {
            height: 30,
        }
    },
    socialIcon: {
        marginRight: 5
    },
    textButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    },
    textField: {
        marginRight: 20,
        backgroundColor: '#ffff',
        borderRadius: 5,
        width: 300,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 10
        }
    },
    buttonStyle: {
        borderRadius: 5,
        backgroundColor: 'hsl(322, 100%, 66%)',
    },
    buttonText: {
        textTransform: 'none',
        color: '#ffff'
    },
    leftgridItem: {
        paddingRight: 100,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0,
        }
    },
    rightgridItem: {
        paddingLeft: 100,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
        }
    }
}))

const ContactComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <Box className={classes.leftgridItem}>
                <img src={HuddleLogo} alt='' className={classes.logo} />
                <Typography variant='subtitle1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                </Typography>
                <Box display='flex' flexDirection='row' alignItems='center' mt={3}>
                    <img src={PhoneIcon} alt='' height={18}/> &nbsp;&nbsp;&nbsp;
                    <Typography>
                        Phone: +1-543-123-4567
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center' my={3}>
                    <img src={EmailIcon} alt='' height={18}/> &nbsp;&nbsp;&nbsp;
                    <Typography>
                        example@huddle.com
                    </Typography> 
                </Box>
                <Box>
                    <FacebookIcon className={classes.socialIcon} />
                    <InstagramIcon className={classes.socialIcon} />
                    <TwitterIcon />
                </Box>  
            </Box>
        </Grid> 
    )
}

const NewsLetterComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <Box className={classes.rightgridItem}>
                <Typography variant='h6'>NEWSLETTER</Typography> 
                <Box mt={3} mb={5}> 
                    <Typography variant='subtitle1'>
                        To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
                    </Typography>
                </Box>
                <Box className={classes.textButtonContainer}>
                    <TextField  variant="outlined" size='small' className={classes.textField} />
                    <Button variant='contained' className={classes.buttonStyle}>
                        <Typography className={classes.buttonText}>
                            Subscribe
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Grid> 
    )
}

const Footer = () => {
    const classes = useStyles();
    return (
        <>  
            <Hidden smDown>
                <img src={DesktopFooterTop} alt='' width='100%'/>
            </Hidden>
            <Hidden mdUp>
                <img src={MobileFooterTop} alt='' width='100%'/>
            </Hidden>  
            <Box className={classes.root}>
                <Grid container spacing={10}>
                    <Hidden smDown>
                        <ContactComponent />
                        <NewsLetterComponent />
                    </Hidden>
                    <Hidden mdUp>
                        <NewsLetterComponent />
                        <ContactComponent />
                    </Hidden>      
                </Grid>    
            </Box>    
        </>
    )
}

export default Footer;
