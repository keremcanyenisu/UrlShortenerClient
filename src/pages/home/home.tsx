import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';

function Home() {

    const [originalUrl,setOriginalUrl] = useState();
    const [shortenedUrl,setShortenedUrl] = useState();


    const getShortenedUrl = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({originalUrl : originalUrl})
        };
        fetch('http://51.140.53.109/api/urlShortener/create/', requestOptions)
            .then(response => response.json())
            .then(data => setShortenedUrl(data.shortenedUrl));
    
    }

    const handleUrlChange = (e:any) => {
        setOriginalUrl(e.target.value);
    }
    
    return <>
        <Container>
            <Row className="justify-content-md-center">
             <h2>URL Shortener</h2>
            </Row>  
            <Row className="justify-content-md-center">
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Shorten your link"
                            aria-label=""
                            aria-describedby="basic-addon2"
                            onChange={handleUrlChange}
                        />
                        <InputGroup.Append>
                            <Button variant="primary" onClick={getShortenedUrl}>Shorten</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="col-12">
                    <a target="_blank" href={shortenedUrl}>{shortenedUrl}</a>
                </Col>
            </Row>
        </Container>
    </>
}

export default Home;