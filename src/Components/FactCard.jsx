/*********** TO DO ************/

// Some images don't fit quite right in the Fact Card. Not sure how best to proceed...
// Temperament -> get these 2 divs to go in a row and not in column
// Swap wording like 'Breed group:' for props and then set this in Info so we can do different options for cat card
// How to make card.text and btns generic - for info and fav pgs

//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// import Info from '../Pages/Info';
import './Components.css'

import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function FactCard(props) {

    /***************************** Dog Img API ********************************/
        // Need to populate this with user choice
    //     const breedName = "dachshund";
        
    // const [cardImg, setCardImg] = useState(null);
    // const imgAlt = "a " + breedName;
    // const queryUrlImg = "https://dog.ceo/api/breed/" + breedName + "/images/random/50";
    // const cardImg2 = "src/assets/example.jpg";

    // useEffect(() => {
    //     fetch(queryUrlImg)
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             // Update state with fetched data
    //             setCardImg(data.message[0]);
    //         });
    // }, []);
   /******************************************************************************************/

    // function capitalizeFirstLetters(str) {
    //     const words = str.split(' ');
    //     const capitalisedWords = words.map(word => {
    //         return word.charAt(0).toUpperCase() + word.slice(1);
    //     });
    //     return capitalisedWords.join(' ');
    // }
    // const breedNameCap = capitalizeFirstLetters(breedName);

    return (
        <div>
            {/* Build card */}
            <Card text='dark' className='bg-cream m-2 text-center mx-auto d-flex justify-content-center col-10 col-md-8'>
                <Card.Img variant="top" className="object-fit-cover" src={props.img} style={{ height: "50vh" }} alt={props.animalBreed} />

                <Card.Body>
                    <Card.Title className='mb-4 fact-card-text' >{props.animalBreed}</Card.Title>

                    <ListGroup className='mb-3' as="ul" style={{ textAlign: "left" }}>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>{props.title1}: </span>{props.info1}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li"><span className='fw-bold'>{props.title2}: </span>{props.info2}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li" ><span className='fw-bold'>{props.title3}: </span>{props.info3}</ListGroup.Item>
                        <ListGroup.Item variant="light" as="li"><div className='fw-bold'>{props.title4}: </div><div>{props.info4}</div></ListGroup.Item> {/*get these 2 divs to go in a row and not in column*/}
                    </ListGroup>

                    <Card.Text className="fact-card-text">
                    <span className='fw-bold'>Have you found your fur-ever friend?</span> <br /> If so, why not get some help to chose the paw-fect name for them.
                    </Card.Text>

                    <Button className='btn side-btn m-2' onClick={props.handleShowInfoClick}>See more images</Button>
                    <NavLink to="/GenerateName" role="button" className='btn btn-brown m-2' variant="primary">
                        Pick a name for your pet
                    </NavLink>
                    <Button className='btn side-btn m-2' onClick={props.handleSaveAnimal}>Save to favourites</Button> {/*disabled={true}   disabled-btn  */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default FactCard;


