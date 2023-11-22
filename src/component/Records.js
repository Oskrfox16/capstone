import React from 'react'

const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Titles</th>
                <th scope='col'>Current Lord</th>
                <th scope='col'>Sworn Members</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.name} </td>
                    <td>{item.titles} </td>
                    <td>{'comming soon'} </td>
                    <td>{'comming soon'} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records  