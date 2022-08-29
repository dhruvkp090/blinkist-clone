import React, {useState, useContext} from 'react';
import Context from '../../../util/context';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBookForm from '../Form/Form';
import ButtonItem from '../../molecule/Button/ButtonItem';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import {primaryColor, secondaryColor, tertiaryColor } from '../../../Theme/Theme';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const util = {alertWindow: null,  addBook: null};


const styles = theme => ({
    containedGreen: {
        color: primaryColor,
        backgroundColor: tertiaryColor,
        borderRadius: 4,
        "&:hover": {
            backgroundColor: "#20ba68",
        },
        padding: "2% 8%"
    },
    titleText: {
        color: primaryColor,
        marginTop: "2rem"
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: secondaryColor
    }
});

const FormDialogueBox = (props) => {

    const { bookList,setBookList } = useContext(Context);

    const { classes } = props;

    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookDuration, setBookDuration] = useState(0);
    const [category, setCategory] = useState({id: 0 , name: "Select a category"});
    const [open, setOpen] = React.useState(false);

    util.alertWindow = () => {
        window.alert("Please add book");
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (e)=> {
        e.preventDefault();

        if(!bookTitle){
            util.alertWindow();
            return ;
        }

        util.addBook({bookTitle, bookAuthor, bookDuration, category});

        setBookTitle('');
        setBookAuthor('');
        setCategory(1);
        setBookDuration(0);
    };

    util.addBook = async (book) => {
        const  updatedBook = {...book, img: "https://images.blinkist.com/images/books/602e66826cee070007cf21cc/1_1/470.jpg"};
        const res = await fetch(`http://localhost:5000/allBooks/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBook)
        });

        const data = await res.json();

        setBookList([...bookList, data]);
    };

    return (
        <div>
            <ButtonItem color="primary" variant= "text" onClick={handleClickOpen}>
                Add Book
            </ButtonItem>
            <Dialog fullWidth={true} maxWidth="xs" open={open} onClose={handleClose}>
                <DialogTitle id="form-dialog-title">
                    <IconButton
                        className={classes.closeButton}
                        onClick={handleClose}
                        >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.titleText}><strong>Add Book</strong></Typography>
                </DialogTitle>
                <DialogContent>
                    <AddBookForm 
                        bookTitle={bookTitle} 
                        setBookTitle={setBookTitle} 
                        bookAuthor={bookAuthor}
                        setBookAuthor={setBookAuthor}
                        bookDuration={bookDuration}
                        setBookDuration={setBookDuration}
                        category={category}
                        setCategory={setCategory}
                        fetchCategory={props.fetchCategory}
                    />
                </DialogContent>
                <DialogActions>
                    <ButtonItem onClick={handleClose} size="large" color="secondary">
                        <strong>Close</strong>
                    </ButtonItem>
                    <ButtonItem variant="contained" size="large" onClick={onSubmit} className={classes.containedGreen}>
                        <strong>Add</strong>
                    </ButtonItem>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(FormDialogueBox);
