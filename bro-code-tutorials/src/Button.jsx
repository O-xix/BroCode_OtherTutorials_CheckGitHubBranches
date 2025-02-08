function Button() {

    const handleClick = () => console.log('Button clicked!');
    //const handleClick2 = (name) => console.log(`Hello ${name}!`);

  return <button onClick={() => handleClick2("Teja Dasari")}>Click me!</button>;
}

export default Button;