import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getBooksDetails} from "../api/GoogleBook";
import {Card,CardImg,CardBody,CardTitle} from "reactstrap";

const BookDetails = (props) => {
    console.log(props);
    const [currentBook, SetCurrentBook] = useState({});
    let ImageURL;
    useEffect(() =>{
        getBooksDetails(props.match.params.id, SetCurrentBook);
        console.log(currentBook);
    },[])

    if (currentBook.volumeInfo == undefined){
        return (<div>Loading... Please wait</div>)
    }else {
        if (currentBook.volumeInfo.imageLinks == undefined) {
            ImageURL = null;
        } else {
            ImageURL = currentBook.volumeInfo.imageLinks.thumbnail;
        }
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Card style={{ minWidth: '400px', maxWidth: '400px', margin: '4em', alignSelf: 'center' }}>
                    <div className="col s12 m7">

                                {ImageURL == null ? (
                                    <img
                                        src="https://picsum.photos/200/300"
                                        alt=""
                                        style={{ width: "250px", height: "300px" }}
                                    />
                                ) : (
                                    <img
                                        top width="30%"
                                        src={ImageURL}
                                        alt=""
                                        style={{ width: "250px", height: "300px" }}
                                    />
                                )}
                            </div>
                            <div className="card-content">
                                <p><h6><b>{currentBook.volumeInfo.title} </b></h6></p>
                                By {currentBook.volumeInfo.authors ? (currentBook.volumeInfo.authors.join(', ')):("")}

                            </div>
                            <div className="card-action">
                                <Link to="/">Go to search page</Link>
                            </div>


                            <CardBody>
                            <p><b>Publisher:</b> {currentBook.volumeInfo.publisher}</p>
                            <p><b>Published Date:</b> {currentBook.volumeInfo.publishedDate}</p>
                            <p><b>Language:</b> {currentBook.volumeInfo.language}</p>
                            <p><b>Total page:</b> {currentBook.volumeInfo.pageCount}</p>
                            <p><b>Average Rating:</b> {currentBook.volumeInfo.averageRating}</p>
                            <p><b>Ratings Count:</b> {currentBook.volumeInfo.ratingsCount}</p>
                            </CardBody>

                    </Card>
                    <Card>
                            <Card>
                            <p><b>Description:</b></p>
                            <div dangerouslySetInnerHTML={{ __html: currentBook.volumeInfo.description }} />


                            <p><b>Caterories:</b></p>
                            <p>{currentBook.volumeInfo.categories ? (currentBook.volumeInfo.categories.join(', ')):("")}</p>
                            </Card>
                    </Card>

            </div>
        );
    }
};

export default BookDetails;