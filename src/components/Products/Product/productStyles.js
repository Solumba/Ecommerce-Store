import {makeStyles} from '@material-ui/core/styles';


//a callback function with an instant return, to put in an instant return, you wrap in parenthesis and return an object
export default makeStyles(() => ({
    root: {
        maxHeight: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', 
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));