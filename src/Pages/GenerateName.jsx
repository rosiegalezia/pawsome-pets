// Imported NPM library
import dogNames from 'dog-names';

// Imported React state
import { useState, useEffect } from 'react';

// Imported React-Bootstrap elements
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

// Imported CSS
import './pages.css'
import '../Components/Components.css'

function GenerateName() {

    // create states for if sex has been set and name generated
    const [Sex, setSex] = useState('')
    const [generatedName, setGeneratedName] = useState('')

    // event handler for when sex has been set/changed from dropdown
    const handleSexChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)

        setSex((previous) => {

            let updatedSex = previous === "Female" ? "Male" : "Female"
            console.log(updatedSex)

            // call the generate name function with the updated sex for next render
            generateName(updatedSex)
            return updatedSex
        })

    };

    // calls the npm library and generates a name depending on chosen sex
    const generateName = (Sex) => {
        if (Sex === "Female") { setGeneratedName(dogNames.femaleRandom()) }
        else if (Sex === "Male") { setGeneratedName(dogNames.maleRandom()) }
        else { setGeneratedName(dogNames.allRandom()) }
    };

    // call the generate Name function as well if Re-generate button clicked
    const regenerateClick = () => {
        generateName(Sex);
    };

    // set the colour of the card depending on chosen sex
    const setBackgroundColor = () => {
        switch (Sex) {
            case 'Female':
                return '#fff0f9'; // Light pink for female
            case 'Male':
                return '#f0f9ff'; // Light blue for male
            case "Don't mind":
                return '#fffbf0'; // Yellow for 'don't mind'
            default:
                return '#fff'; // Default white background
        }
    };

    // create states for the toast that confirms name has been saved
    const [toast, setToast] = useState(false);

    // function to toggle the Toast state
    const toggleToast = () => {
        setToast(!toast)
    };

    /************************************* Local Storage *************************************/

    const storedNames = JSON.parse(localStorage.getItem('name')) || []; // Sets storedNames to anything saved in local storage, but if that is empty, it will initialise as an empty array.
    const [saveName, setSaveName] = useState(storedNames);
    console.log(`Names in local storage:`)
    console.log(saveName)

    // Tracks when saveName variable is updated and then updates local storage
    useEffect(() => {
        const uniqueNames = [...new Set(saveName)]
        console.log('unique names: ', uniqueNames)
        localStorage.setItem("name", JSON.stringify(uniqueNames))
    }, [saveName]);

    //Function to Save Names to saveName variable
    const handleSaveName = () => {

        const insertAt = 0; // Add new saved name to start of saveName array
        const nextSavedName = [
            ...saveName.slice(0, insertAt), // Items before the insertion point
            generatedName,// New item
            ...saveName.slice(insertAt) // Items after the insertion point
        ];
        setSaveName(nextSavedName) //updates saveName array with new animal obj that the user just click 'save to favs' on
        toggleToast();
    };
    /*****************************************************************************************/

    return (
        <div className='page-container'>
            <div className='page-content generate-name d-flex flex-column'>

                <h2 className='p-3 m-3 pt-5 text-center'>What gender name would you like for your pet?</h2>

                {/* dropdown for sex selection  */}
                <Form.Select aria-label="Default select example" size="sm" onChange={handleSexChange} className='p-3 m-3 w-50'>
                    <option>Select your pet's sex</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Don't mind">Don't mind</option>
                </Form.Select>

                {/* card in which generated name is displayed */}
                <div className='p-0 m-auto w-50'>
                    <Card onClick={toggleToast} className='namecard py-5 m-auto' style={{ backgroundColor: setBackgroundColor() }}>
                        <Card.Body>
                            <Card.Text className='text-center generatedName'>
                                {generatedName}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* button that calls the generate name function again */}
                <div className='p-3 m-3 row w-md-50'>
                    <div className='col-md'>
                        <Button
                            // variant="primary"
                            className='btn-brown m-2 w-100'
                            onClick={regenerateClick}
                        >Re-generate</Button>
                    </div>

                    <div className='col-md'>
                        <Button
                            // variant="primary"
                            className='btn-brown m-2 w-100 text-nowrap'
                            onClick={handleSaveName}
                        >Save to Favourites</Button>
                    </div>

                </div>

                {/* Toast to confirm name has been saved */}
                <Toast className='toast w-md-50 text-center' show={toast} onClose={toggleToast} delay={2000} autohide>
                    <Toast.Body>Name has been saved to Favourites</Toast.Body>
                </Toast>

            </div>
        </div>


    )
}

export default GenerateName