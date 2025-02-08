function ProfilePicture() {
    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img src="https://images.pexels.com/photos/6033988/pexels-photo-6033988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile" onClick={(e) => handleClick(e)} />
    );
}

export default ProfilePicture;