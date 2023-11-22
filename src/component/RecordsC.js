import React from 'react'

const RecordsC = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Gender</th>
                <th scope='col'>Culture</th>
                <th scope='col'>Aliases</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.name} </td>
                    <td>{item.gender} </td>
                    <td>{item.culture} </td>
                    <td>{item.aliases} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default RecordsC  