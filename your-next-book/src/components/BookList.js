import React from "react";
import Book from "./BookCard";

const Booklist=(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {props.books.map((book,i)=>{
                        return (<Book data={book} key={i}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Booklist;