/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Body() {

useEffect(() => {
      axios
        .get(
          "https://swapi.co/api/people/"
        )
        .then(res => {
          console.log(res.data);
       
        })

        .catch(err => console.log(err));
          }, []);
          
          return (
            <div>
                
            </div>
        )
        }

  export default Body