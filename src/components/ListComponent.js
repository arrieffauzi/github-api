import React from 'react'
import { Container, Row } from 'reactstrap'

export default function ListComponent(props) {
    return (
        <Container>
            <Row>
                <ul>
                    {props.apis &&
                        props.apis.map((item) => {
                            <li key={item}>
                                <span>{item}</span>
                            </li>
                        })}
                </ul>
            </Row>
        </Container>
    )
}
