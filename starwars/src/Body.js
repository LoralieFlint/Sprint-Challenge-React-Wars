import React from "react";
import styled from "styled-components";

const divs = "divs";

export default function Body(props) {
  const PeopleDiv = styled.div`
    padding: 10px;
    display: inline-block;
    width: 60%;
    border-radius: 15px;
    margin: 10px 40px auto;
    &:nth-child(even) {
      background: darkred;
      border: 1px solid #000000;
    }

    &:nth-child(odd) {
      background: green;
      color: white;
      border: 1px solid #ffffff;
    }
  `;

  return props.people.map((e, index) => (
    <PeopleDiv key={index}>
      <div className={divs}>Name: </div> {e.name} <br />
      <div className={divs}>Hair Color: </div> {e.hair_color} <br />
      <div className={divs}>Eye Color:</div> {e.eye_color} <br />
      <div className={divs}>Birth Year:</div> {e.birth_year}
    </PeopleDiv>
  ));
}
