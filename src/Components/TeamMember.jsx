import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

import './Components.css'

function TeamMember(props) {
    return (
        <Card className='team-card m-3 g-0 col-12 col-sm-12 col-md-5 col-lg-3 col-xl-2'>
            <Card.Img variant="top" src={props.image} className='member-photo' />
            <Card.Body className='p-3'>
                <Card.Title className='py-2'>{props.name}</Card.Title>
                <Card.Text>
                    <b>Worked on:</b><br />The {props.role} <br />
                    <br />
                    <b>Favourite pet:</b><br /> {props.favpet}
                </Card.Text>
            </Card.Body>
            <Button variant="primary" href={props.github} target="_blank" className='p-2 m-3 darkBtn'>View {props.name}'s GitHub Profile</Button>
        </Card>
    );
}

export default TeamMember