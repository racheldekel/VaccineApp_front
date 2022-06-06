import {useEffect, useState} from "react";
import React, { Component }  from 'react';
import axios from 'axios';
import {DataGrid} from '@mui/x-data-grid';


const url = 'http://127.0.0.1:8000/patient'

const columns = [
    {field: 'PatientId', headerName: 'ID', width: 70},
    {field: 'PatientFirstName', headerName: 'First Name', width: 130},
    {field: 'PatientLastName', headerName: 'Last Name', width: 130},
    {field: 'PatientDateOfBirth', headerName: 'Date Of Birth', width: 130},
    {field: 'PatientAdress', headerName: 'Address', width: 130},
    {field: 'PatientCity', headerName: 'City', width: 130},
    {field: 'PatientZip', headerName: 'Zipcode', width: 130},
    {field: 'PatientLand', headerName: 'Landline', width: 130},
    {field: 'PatientCell', headerName: 'CellPhone', width: 130},
    {field: 'PatientInfected', headerName: 'Had Covid Before', width: 130},
    {field: 'PatientDiabetes', headerName: 'Other diabetes', width: 130},
    {field: 'PatientCardio', headerName: 'Other cardio', width: 130},
    {field: 'PatientAllergies', headerName: 'Other allergies', width: 130},
    {field: 'PatientOther', headerName: 'Other', width: 130}
]

export default function InfoForm(props) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const result = await axios(url);
            setData(result.data);
            console.log(result.data);
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false)
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <a href='http://localhost:8000/Excel' className='btn btn-primary'>export to Excel</a>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div className="alert alert-warning">Loading ...</div>
            ) : (
                <div style={{height: 400, width: "auto"}}>
                    <DataGrid rows={Object.values(data)} getRowId={(row) => row.PatientId} columns={columns}
                              disableSelectionOnClick/>
                </div>
            )}
        </div>)

}