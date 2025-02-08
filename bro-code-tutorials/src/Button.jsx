function Button() {

    const handleClick = (e) => {
        console.log(e);
        e.target.textContent = "I was clicked!";
    }

    return <button onClick={(e) => handleClick(e)}>Click me!</button>;
}

export default Button;