import React from "react";
import PropTypes from "prop-types";
import './RandomResultsRow.css';
import axios from 'axios'

const apiUrl = "https://randomuser.me/api"

function fetchRandomData() {
    return axios.get(apiUrl)
    .then(res => {
        //console.log("in fn",res.data.results)
        const persons = res.data.results;
        return (persons)
      })
}

export default fetchRandomData





