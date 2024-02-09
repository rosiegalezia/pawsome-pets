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

import cardFact from '../Pages/Info';
import './Components.css'

import React, { useState, useEffect } from 'react';

function FactCard(props) {

    /***************************** Dog Img API ********************************/
        // Need to populate this with user choice
        const breedName = "dachshund";
        
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


    function capitalizeFirstLetters(str) {
        const words = str.split(' ');
        const capitalisedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalisedWords.join(' ');
    }
    const breedNameCap = capitalizeFirstLetters(breedName);




    return (
        <div>
            {/* Build card */}
            <Card bg="dark" text='dark' className='bg-cream m-2 text-center mx-auto d-flex justify-content-center col-10 col-md-8'>
                <Card.Img variant="top" src={props.dogImg} style={{ objectFit: "cover", height: "50vh" }} alt={imgAlt} />

                <Card.Body>
                    <Card.Title className='mb-4' >{props.dogName}</Card.Title>

                    {/* <ListGroup className='mb-3' as="ul">
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 1: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 2: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li" ><span className='fw-bold'>Info 3: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 4: </span>xscvbfghjbmn</ListGroup.Item>
                </ListGroup> */}


                    <ListGroup className='mb-3' as="ul" style={{textAlign: "left"}}>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Breed group: </span>{props.dogBreedGroup}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Bred for: </span>{props.dogBredFor}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li" ><span className='fw-bold'>Life span: </span>{props.dogLifeSpan}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Temperament: </span>{props.dogTemperament}</ListGroup.Item>
                    </ListGroup>


                    {/* <ListGroup className='mb-2' variant="flush">
                        <ListGroup.Item border="dark" ><span className='fw-bold'>Info 1: </span>xscvbfghjbmn</ListGroup.Item>
                        <ListGroup.Item className='text-bg-secondary p-3'><span className='fw-bold'>Info 2: </span>xscvbfghjbmn</ListGroup.Item>
                        <ListGroup.Item className='text-bg-secondary p-3'><span className='fw-bold'>Info 3: </span>xscvbfghjbmn</ListGroup.Item>
                    </ListGroup> */}

                    <Card.Text >
                        Have you found your fur-ever friend? <br /> If so, we can help you choose the paw-fect name for them.
                    </Card.Text>

                    <Button className='btn-brown me-4 mb-4' href='#GenerateName' variant="primary">Pick a name for your pet</Button>
                    <Button className='btn-brown me-4 mb-4' variant="primary" disabled={true}>Add to favourites</Button>
                    <Button className='btn-brown mb-4' variant="primary">Get a new image</Button>
                </Card.Body>

            </Card>
        </div>
    );
}

export default FactCard;


