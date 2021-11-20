import React, { Component } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';

export default class ContryWeatherComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherDetails: {}
        }
    }

    componentDidMount() {
        debugger;
        const urlPrams = new URLSearchParams(window.location.search);
        // b5773c64657d96896f08599a71e9df92
        const apiUrl = `http://api.weatherstack.com/current?access_key=b5773c64657d96896f08599a71e9df92&query=${urlPrams.get('capitalCode')}`;
        axios.get(apiUrl).then(res => {
            debugger;
            if (res && res.data) {
                this.setState({
                    weatherDetails: res.data.current
                })
            }
        })
    }

    render() {
        const { weatherDetails } = this.state;
        return (
            <div>
                <h1>Weather Details</h1>
                <hr></hr>
                <div>
                    <div>temperature : {weatherDetails?.temperature}</div>
                    <div>wind_speed : {weatherDetails?.wind_speed}</div>
                    <div>precip : {weatherDetails?.precip}</div>
                    <div>weather_icons : <img src={weatherDetails?.weather_icons?.[0]} /></div>
                </div>
            </div>
        )
    }
}