import React from 'react'
import { Container, List, Row } from 'reactstrap'

export default function ListComponent(props) {
    console.log('props', props)
    return (
        <Container>
            <Row>
                <List type="unstyled" className="todos-container">
                    {props.data &&
                        props.data.map((item) => (
                            <li key={item.id} className="singleList">
                                <span>{item.name}</span>
                            </li>
                        ))}
                </List>
            </Row>
        </Container>
    )
}
