import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NavBar from "../component/NavBar";

import axios from 'axios';
import Records from "../component/Records";
import Pagination from "../component/Pagination";


function Houses() {
  // pagination code imlemented thanks to https://www.educative.io/answers/how-to-implement-pagination-in-reactjs
    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);


    useEffect(() => {
        axios.get('https://www.anapioficeandfire.com/api/houses')
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
            <h2> Houses </h2>
            <Records data={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
        </div>
    );
}

export default Houses;

  





