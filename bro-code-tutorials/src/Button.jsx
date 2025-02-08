function Button() {

    const handleClick = (e) => {
        console.log(e);
        e.target.textContent = "I was clicked!";
    }

    return <button onDoubleClick={(e) => handleClick(e)}>Click me!</button>;
}

export default Button;