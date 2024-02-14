/*********** TO DO ************/

// Some images don't fit quite right in the Fact Card. Not sure how best to proceed...


//Imported Components from React Bootstrap 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function FactCard(props) {
    return (
        <div>
            {/* Build card */}
            <Card text='dark' className='bg-cream m-2 text-center mx-auto d-flex justify-content-center col-10 col-md-8'>
                <Card.Img variant="top" className="object-fit-contain" src={props.img} alt={props.animalBreed} />

                <Card.Body>
                    <Card.Title className='mb-4 fact-card-text' >{props.animalBreed}</Card.Title>

                    <ListGroup className='mb-3' as="ul" style={{ textAlign: "left" }}>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>{props.title1}: </span>{props.info1}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>{props.title2}: </span>{props.info2}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li" ><span className='fw-bold'>{props.title3}: </span>{props.info3}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>{props.title4}: </span><span>{props.info4}</span></ListGroup.Item> 
                    </ListGroup>

                    {props.msg}
                    {props.btn1}
                    {props.btn2}
                    {props.btn3}

                </Card.Body>
            </Card>
        </div>
    );
}

export default FactCard;


