import React from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import { Button } from 'reactstrap';

const Pagination=(props)=>{
    const page_links = [];
    for (let i = 1; i <= props.totalPages; i++) {
        let isActive;
        if (props.currentPage == i) {
            isActive = "active";
        } else {
            isActive = "";
        }

        let classes = "pagination__link--active " + isActive;
        page_links.push(
            <Button
                outline color="danger"
                size="sm"
                className={classes}
                key={i}
                onClick={() => {
                    props.nextPage(i);
                }}
            >
                {i}
            </Button>
        );
    }
    return (
        <div className="container">
            <div className="row" >{page_links}
                <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                />
            </div>
        </div>
    );
}

export default Pagination