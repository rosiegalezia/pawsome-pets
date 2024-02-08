/*********** TO DO ************/

// Center the input and buttons. 
    /* Should the btns go at the end of input box or below...? Depends if we also have a 'select animal'
     input box. If so, add 'pick random breed' btn at end of 'select breed' input and then the 'show info'
     btn underneath??
    */



//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import React, { useState, useEffect } from 'react';

function FactCard() {

    /***************************** Dog Img API ********************************/
        // Need to populate this with user choice
        const breedName = "chihuahua";
        
    const [cardImg, setCardImg] = useState(null);
    const imgAlt = "a " + breedName;
    const queryUrlImg = "https://dog.ceo/api/breed/" + breedName + "/images/random/50";
    const cardImg2 = "src/assets/example.jpg";

    useEffect(() => {
        fetch(queryUrlImg)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Update state with fetched data
                setCardImg(data.message[0]);
            });
    }, []);
   /******************************************************************************************/


    return (
        <div>
            {/* Build card */}
            <Card style={{ width: '38rem' }} bg="dark" text='light' className='m-2 text-center mx-auto d-flex justify-content-center'>
                <Card.Img variant="top" src={cardImg} style={{ objectFit: "cover", height: "400px" }} alt={imgAlt} />

                <Card.Body>
                    <Card.Title className='mb-4' >{breedName}</Card.Title>

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
}

export default FactCard;


