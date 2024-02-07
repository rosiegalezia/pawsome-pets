import Card from 'react-bootstrap/Card';

function TeamMember(props) {
    return (
        <Card style={{ width: '18rem', backgroundColor: 'pink'}}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.role}
                </Card.Text>
                <Button variant="primary" href={props.github} target="_blank">View GitHub Profile</Button>
            </Card.Body>
        </Card>
    );
}

export default TeamMember