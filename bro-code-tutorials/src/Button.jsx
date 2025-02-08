function Button() {

    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`Hello ${name}! You clicked me ${count} times!`);
        }
        else { 
            count++;
            console.log(`You clicked me ${count} times!`);
        }
    };
    //const handleClick2 = (name) => console.log(`Hello ${name}!`);

  return <button onClick={() => handleClick("Teja Dasari")}>Click me!</button>;
}

export default Button;