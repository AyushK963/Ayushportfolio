import React from 'react'
import '../Css/footer.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

export default function Footer() {
    return (
        <Container>
            <div className="footer">

                <Stack direction="horizontal" gap={3}>
                    <div className="footer-title">
                        <h4>AYUSH</h4>
                        <div className="footer-back-container">
                        </div>
                    </div>

                    <div className="footer-flex ms-auto">
                        <a href="#">About</a>
                        <a href="#">Work</a>
                        <a href="#">Blog</a>
                    </div>

                </Stack>
                <hr />
                <p>&copy; AYUSH KANKANE</p>
            </div>
        </Container>
    )
}
