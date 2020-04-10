import React, { useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SingleVideo from './SingleVideo';
import Suggestions from './Suggestions';
import YouTube from 'simple-youtube-api';
import config from '../../config'

const youtube = new YouTube('config.apiKey');
const Videos =()=>{
    useEffect(()=>{
        callApi();
    },[])
    const callApi = async ()=>{
        const result = await youtube.search('ramtoo',5)
        console.log(result);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control size="lg" type="text" placeholder="Search Video Here..." />
                            </Col>
                            <Col>
                                <Button variant="primary" size="lg">Search</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={8}>
                    <SingleVideo/>
                </Col>
                <Col xs={12} lg={4}>
                    <Suggestions/>  
                </Col>
            </Row>
        </Container>
    )
}
export default Videos;