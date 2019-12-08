import React from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function Footer() {

    return(
    <Footer className="mt-5">
<Container fluid={true}>
    <Row className="border-top justify-content-between p-3">
        <Col className="p-0" md={3} sm={12}> Shahrooz Shekaraubi</Col>
<Col className="p-0 d-flex justify-content-end" md={3}>
    This site was built by Shahrooz Shekaraubi
</Col>
    </Row>
</Container>
    </Footer>
    )
}

export default Footer;
