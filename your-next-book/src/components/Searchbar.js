import React from "react";
import {Button,ButtonGroup} from "reactstrap";

const Searchbar=(props)=>{
    return (
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s4">

                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search for your favorite books"
                                   type="text"
                                   onChange={props.handleChange}/>
                                   . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                <button className="waves-effect waves-light btn">Search</button>. . . . . . . . . . . . . . . . . . . . . . . . . .


                        </div>
                    </form>

                    <form action="" onSubmit={props.handleSubmit}>

                        <ButtonGroup className="Sorting-row">
                            <Button outline disabled>Sort By</Button>
                            <Button
                                type='submit'
                                onClick={() => {
                                    props.sorter('newest')
                                }}
                            >Newest</Button>
                            <Button
                                type='submit'
                                onClick={() => {
                                    props.sorter('relevance')
                                }}
                            >Oldest</Button>
                            <Button
                                type='submit'
                                onClick={() => {
                                    props.sorter('relevance')
                                }}
                            >Most Relevant</Button>
                        </ButtonGroup>

                    </form>
                </section>
            </div>
        </div>
    )
}

export default Searchbar