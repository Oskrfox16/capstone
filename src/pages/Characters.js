import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NavBar from "../component/NavBar";

import axios from 'axios';
import RecordsC from "../component/RecordsC";
import Pagination from "../component/Pagination";



///// Pagination code implemented thanks to https://www.educative.io/answers/how-to-implement-pagination-in-reactjs
function Characters() {
  
    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);


    useEffect(() => {
        axios.get('https://www.anapioficeandfire.com/api/characters?page=2&pageSize=60')
            .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    alert('There was an error while retrieving the data')
                })
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div>
            <NavBar />
        <div className='container mt-5'>
            <h2> Characters </h2>
            <RecordsC data={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
        </div>
    );
}

export default Characters;