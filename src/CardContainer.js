import ResultCard from './ResultCard';
import React, { useState, useEffect } from 'react';

function CardContainer() {
    const [list, setList] = useState([]);
    const listItem = list.map((item, index) => {
        return <ResultCard item={item} />
    })

    useEffect(() => {

        const API = 'http://35.79.209.161:8080/api/result/brief/list'
        fetch(API)
        .then(respone => respone.json())
        .then(data => {
            setList(data)
        })
      }, [])

    return (
        <>
            {listItem}
        </>
    );
}

export default CardContainer;