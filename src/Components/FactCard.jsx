
//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Image API stuff (work in progress)
// let breedName = "chihuahua";
// let imgAlt = "a " + breedName;
// let queryUrlImg = "https://dog.ceo/api/breed/" + breedName + "/images/random/50";
// let cardImg = "src/assets/example.jpg";

// fetch(queryUrlImg)
// .then(function (response) {
//     return response.json();
// }).then(function(data) {
//     let cardImg = data.message[0];
//     console.log(cardImg);
// });

function FactCard(props) {
    return (
        <div>
        <Card style={{ width: '38rem' }} bg="dark" text='light' className='m-2 text-center  mx-auto d-flex justify-content-center'>
            <Card.Img variant="top" src="src/assets/example.jpg" style={{ objectFit: "cover"}} /> {/*Currently a placeholder dog img */}
            <Card.Body>
                <Card.Title className='mb-4' >Dog Breed</Card.Title>
                
                {/* <ListGroup className='mb-3' as="ul">
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 1: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 2: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li" ><span className='fw-bold'>Info 3: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 4: </span>xscvbfghjbmn</ListGroup.Item>
                </ListGroup> */}

                <ListGroup className='mb-3' as="ul" style={{textAlign: "left"}}>
                    <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Breed group: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Bred for: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="light" as="li" ><span className='fw-bold'>Life span: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Temperament: </span>xscvbfghjbmn</ListGroup.Item>
                </ListGroup>


                {/* <ListGroup className='mb-2' variant="flush">
                    <ListGroup.Item border="dark" ><span className='fw-bold'>Info 1: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item className='text-bg-secondary p-3'><span className='fw-bold'>Info 2: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item className='text-bg-secondary p-3'><span className='fw-bold'>Info 3: </span>xscvbfghjbmn</ListGroup.Item>
                </ListGroup> */}

                <Card.Text >
                    Have you found your fur-ever friend? <br/> If so, why not get some help to chose the paw-fect name for them.
                </Card.Text>
                <Button className='me-4 mb-4' variant="primary">Pick a name for your pet</Button>
                <Button className='me-4 mb-4' variant="primary" disabled="true">Add to favourites</Button>
                <Button className='mb-4' variant="primary">Get a new image</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default FactCard;