import React,{useState} from "react"
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import {getBooksByTerm} from "./api/GoogleBook";
import Booklist from "./components/BookList";
import ReactPaginate from "react-paginate";
import "./components/Pagination/style.css"
import Pagination from "./components/Pagination/Pagination";




const App=()=>{


  const [searchTerm,setSearchTerm]=useState("")
  const [books,setBooks]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [totalPages,setTotalPages]=useState(0)
  const [sortTerm, setSortTerm] = useState('relevance');

  const handleSubmit=async(event)=>{
    event.preventDefault()
    await getBooksByTerm(searchTerm,setBooks,setTotalPages,currentPage,sortTerm)
  }

  const handleChange=(event)=>{
    setSearchTerm(event.target.value)
  }

  const nextPage = async (pageNumber) => {

    setCurrentPage(pageNumber);
    await getBooksByTerm(searchTerm, setBooks, setTotalPages, currentPage);
  }

  return(
      <div>

        <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} sorter={setSortTerm}/>

        <Booklist books={books}/>
        <div></div>

        {totalPages>1?
            <Pagination
                nextPage={nextPage}
                currentPage={currentPage}
                totalPages={totalPages}/>:""}




      </div>
  )
}

export default App;