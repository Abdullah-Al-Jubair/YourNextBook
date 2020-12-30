import React from "react";
import {Card,CardImg} from "reactstrap";
import { Link} from "react-router-dom";



const Book = (props) => {
    let ImageURL;
    if (props.data.volumeInfo.imageLinks == undefined) {
        ImageURL = null;
    } else {
        ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
    }
    return (

        <div className="col s12 m3">
            <div className="card large" >
                <div>
                    {ImageURL == null ? (
                        <CardImg
                            src="https://picsum.photos/200/300"
                            alt=""
                            style={{ width: "180px", height: "250px" }}
                        />
                    ) : (
                        <img
                            src={ImageURL}
                            alt=""
                            style={{ width: "180px", height: "250px" }}
                        />
                    )}
            </div>
                <div className="card-content">
                    <p><b>{props.data.volumeInfo.title} </b></p>
                    By {props.data.volumeInfo.authors}

                </div>



            <div className="card-action">
                <Link to={{pathname:"/book/"+props.data.id, book_id:props.data.id}}
                      style={{ color: `#008080` }}><p><b>Click here to see details</b></p></Link>
            </div>

            </div>

        </div>

    );
};

export default Book;