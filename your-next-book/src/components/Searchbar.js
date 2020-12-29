import React from "react";
import {Button,ButtonGroup,InputGroup,InputGroupAddon,ButtonDropdown,ButtonToolbar
,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";

const Searchbar=(props)=>{
    return (
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s4">
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
                                    props.sorter('oldest')
                                }}
                            >Oldest</Button>
                            <Button
                                type='submit'
                                onClick={() => {
                                    props.sorter('relevance')
                                }}
                            >Most Relevant</Button>
                        </ButtonGroup>








                        <div className="input-field">
                            <input placeholder="Search for your favorite books" type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Searchbar