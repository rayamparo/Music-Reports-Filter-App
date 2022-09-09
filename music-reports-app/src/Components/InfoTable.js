import React from 'react';
// Table from React Bootstrap
import Table from 'react-bootstrap/Table';

const InfoTable = ({ data }) => {

     if(data.length !== 0) {
        //Ensures only 5 max for the table
        if(data.length >= 5) {
            data.length = 5;
        }

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Dynamically creates the rows for the data */}
                    {data.map(idx => {return <tr><td>{idx.userId}</td><td>{idx.id}</td><td>{idx.title}</td><td>{idx.completed.toString()}</td></tr>})}
                </tbody>
            </Table>
        );
    }
}

export default InfoTable;