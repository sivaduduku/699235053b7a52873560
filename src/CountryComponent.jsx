import React, { Component } from "react";
import axios from 'axios';

import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class ContryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryCode: '',
            countryList: []
        }
    }

    getCountryDetails = () => {
        debugger;
        const { countryCode } = this.state;
        const apiUrl = `https://restcountries.com/v3.1/name/${countryCode}`;
        axios.get(apiUrl).then(res => {
            debugger;
            if (res && res.data) {
                this.setState({
                    countryList: res.data
                })
            }
        })
    }

    saveCountryCode = (event) => {
        this.setState({
            countryCode: event.target.value
        })
    }

    render() {

        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });

        const { countryCode, countryList } = this.state;

        return (
            <div>
                <h4>Country Details</h4>
                <div>
                    <TextField
                        id="countryCode"
                        placeholder="Enter country"
                        onChange={this.saveCountryCode}
                        inputProps={{ "data-testid": "country-text-box" }}>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={countryCode == '' ? true : false}
                        onClick={this.getCountryDetails}
                        data-testid="get-country-details-button">
                        Get Country Details
                    </Button>
                </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>capital</TableCell>
                                <TableCell align="right">population</TableCell>
                                <TableCell align="right">latlng</TableCell>
                                <TableCell align="right">flag</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {countryList.map((row, index) => (
                                <TableRow key={row.index}>
                                    <TableCell component="th" scope="row">
                                        {row.capital.join()}
                                    </TableCell>
                                    <TableCell align="right">{row.population}</TableCell>
                                    <TableCell align="right">{row.latlng.join()}</TableCell>
                                    <TableCell align="right">
                                        <img src={row.flags.png} style={{ width: '25px', height: '25px' }} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" onClick={() => {
                                            debugger;
                                            window.location.href = "/weatherDetails?capitalCode=" + row.capital.join();
                                        }}>
                                            Capital Weather
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

