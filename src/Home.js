import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getApiList } from './actions/ApiAction';
import ListComponent from './components/ListComponent';
import './App.css';
import { Container, Row } from 'reactstrap';

export default function Home() {
    const Api = useSelector((state) => state.Api.apis)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApiList())
    }, [])

    return (
        <div className="App">
            <div className="App-header">
                <Container>
                    <Row>
                        <span style={{marginBottom:30}}>My List Repository :</span>
                    </Row>
                    <Row>
                        <ListComponent data={Api} />
                    </Row>
                </Container>
            </div>
        </div>
    );
}
