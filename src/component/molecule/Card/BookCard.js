import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonItem from '../Button/ButtonItem';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import './Card.css';

const BookCard = (props) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={props.bookTitle}
                image= {props.img ? 
                            props.img : 
                            "https://images.blinkist.com/images/books/534d4cb46633610007320000/1_1/640.jpg"}
                title={props.bookTitle}
            />
            <CardContent>
                <Typography gutterBottom variant="h6">
                    {props.bookTitle}
                </Typography>
                <Typography className="author" gutterBottom variant="body1" color="secondary">
                    <strong>{props.bookAuthor}</strong>
                </Typography>
                <div className="timeSection">
                    <img 
                        src="https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg" 
                        alt="" className="icon" />
                    <Typography gutterBottom variant="body2" className="timeText">{props.bookDuration}-minute read</Typography>
                </div>
            </CardContent>
            <CardActions >
                {props.isInLibrary(props.id) ? 
                    (changeButtonBasedOnReadStatus(props)) :
                    <ButtonItem startIcon= { <AddIcon /> } 
                                onClick={(e) => props.addToLibrary(e, props.id)} 
                                size="medium" color="primary" 
                                variant="contained" 
                                fullWidth={true}>
                        <Typography variant="body1"><strong>Add to library</strong></Typography>
                    </ButtonItem>
                }
            </CardActions>
    </Card>
    );
};

BookCard.defaultProps = {
    bookTitle: "Animal Farm",
    bookAuthor: "Gorge Orwell",
    bookDuration: "20"
};

export default BookCard;

function changeButtonBasedOnReadStatus(props) {
    return props.isFinished ?
        <ButtonItem 
            onClick={(e) => props.onClick(e, props.id)} 
            size="medium" color="secondary" 
            variant="contained" 
            fullWidth={true}>
            <Typography variant="body1"><strong>Read Again</strong></Typography>
        </ButtonItem> :
        <ButtonItem 
            onClick={(e) => props.onClick(e, props.id)} 
            size="medium" 
            color="primary" 
            variant="contained" 
            fullWidth={true}>
            <Typography variant="body1"><strong>Mark as Finished</strong></Typography>
        </ButtonItem>;
}

