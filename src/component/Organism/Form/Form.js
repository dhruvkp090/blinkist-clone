import { React } from 'react';
import FormInputField from '../../atom/InputFields/FormInputField';
import FormSelectField from '../../atom/InputFields/FormSelectField';

export const util = {handleChange: null };

const AddBookForm = (props) => {

    util.handleChange = async (value) => {
        console.log(value);
        const categoryName = await props.fetchCategory(value);
        props.setCategory({
            id: value,
            name: categoryName
        });
    };
    
    return (
        <div>
            <div>
            <FormInputField 
                id= "bookTitle"
                type= "text"
                placeholder= 'Book Name'
                labelText = "Book Name"
                value = {props.bookTitle}
                onChange={(e) => {props.setBookTitle(e.target.value);}}
            /> <br />
            <FormInputField 
                id= "bookAuthor"
                type= "text"
                placeholder= 'Author Name'
                labelText = "Author"
                value = {props.bookAuthor}
                onChange={(e) => {props.setBookAuthor(e.target.value);}}
            /> <br />
            <FormSelectField 
                id= "category"
                labelText = "Category"
                value = {props.category.id}
                onChange={(e) => {util.handleChange(e.target.value);}}
                data-testid="category"
            /> <br />
            <FormInputField 
                id= "bookDuration"
                type= "number"
                placeholder= 'Duration'
                labelText = "Duration"
                value = {props.bookDuration}
                onChange={(e) => {props.setBookDuration(e.target.value);}}
            /> <br />
        </div>
        </div>
    );
};

export default AddBookForm;
