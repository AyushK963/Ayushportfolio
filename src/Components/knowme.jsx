import React from 'react'
import '../Css/know_me.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function KnowMe() {
    return (
        <>
            <Container>
                <div className='Know-title'>
                    <h1>Hi There!! &#128075; I'm <b>AYUSH KANKANE</b>.</h1>
                </div>


                <div className="know-content">
                    <p>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A <b>Full Stack Web Devloper</b> having
                        specialization in back end & front end devlopment. I'm an undergrad student at <b>VIT
                            Vellore </b>, studing Computer Science . I have 6+ months of
                        experience in Web Devlopment and  poses proficient skills in <b>Node.js</b>, <b>Express.js</b>, <b>PHP</b>  for back end
                        & <b>React.js</b>, <b>CSS/SASS</b>, <b>JavaScript</b>, <b>Tailwind</b>, <b>Bootstrap</b> for front end.
                    </p>

                    <div className="edu">
                        <h1>Education</h1>
                        <div className="edu_details">
                            <Stack direction="horizontal" gap={3}>
                                <h3><b>B.Tech (CSE ) </b></h3>
                                <h4 className='p-2 ms-auto'>Aug'20 - May'24</h4>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <h3>Vellore Institute of Technology (VIT)</h3>
                                <h4 className='p-2 ms-auto'>Vellore, Tamil Nadu, India.</h4>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <h3>CGPA of 7.47</h3>
                            </Stack>
                        </div>

                        <div className="edu_details">
                            <Stack direction="horizontal" gap={3}>
                                <h3><b>Class 12th Boards </b></h3>
                                <h4 className='p-2 ms-auto'>Mar'18 - Mar'19</h4>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <h3>UP BOARD</h3>
                                <h4 className='p-2 ms-auto'>UTTAR PRADESH, India.</h4>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <h3>80% in JAC Board</h3>
                            </Stack>
                        </div>

                    </div>

                    <div className="skills">
                        <h1>Key Skills</h1>

                        <Button variant="outline-dark">C</Button>{' '}
                        <Button variant="outline-dark">C++</Button>{' '}
                        <Button variant="outline-dark">Java</Button>{' '}
                        <Button variant="outline-dark">Data Structure & Algo</Button>{' '}
                        <Button variant="outline-dark">Operating Systems</Button>{' '}
                        <Button variant="outline-dark">DBMS</Button>{' '}
                        <Button variant="outline-dark">OOPS Concept</Button>{' '}
                        <Button variant="outline-dark">Web Devlopment</Button>{' '}
                        <Button variant="outline-dark">React.js</Button>{' '}
                        <Button variant="outline-dark">Node.js</Button>{' '}
                        <Button variant="outline-dark">Express.js</Button>{' '}
                        <Button variant="outline-dark">MongoDB</Button>{' '}
                        <Button variant="outline-dark">Git & Github</Button>{' '}
                        <Button variant="outline-dark">SQL</Button>{' '}
                        <Button variant="outline-dark">AI/ML</Button>{' '}
                        <Button variant="outline-dark">IBM WATSON</Button>{' '}
                    </div>
                </div>
            </Container>
        </>
    )
}
