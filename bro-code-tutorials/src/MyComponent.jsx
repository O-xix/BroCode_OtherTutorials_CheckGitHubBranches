import React, {useState} from 'react';

function MyComponent() {
    //useState returns an array with 2 elements, a value and a method for the value
    //useState is a hook that allows you to add a different state to a functional component; it allows to have a way of changing template values over time
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployeed, setIsEmployeed] = useState(false);

    //function to update the name
    const updateName = () => {
        setName('Spongebob');
        console.log("Name updated to {name}");
    }

    //function to increment the age
    const incrementAge = () => {
        setAge(age + 1);
        console.log("Age updated to {age}");
    }

    const toggleEmployeed = () => {
        setIsEmployeed(!isEmployeed);
        console.log("Employeed updated to {isEmployeed}");
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Employeed: {isEmployeed ? "Yes" : "No"}</p>
            <button onClick={() => setIsEmployeed(!isEmployeed)}>Toggle Employeed</button>
        </div>
    );
}

export default MyComponent;