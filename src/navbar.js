const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <a href="./">Home</a>
                <a href="./create">New Blog</a>
                <a href="./"style={{
                    color: "purple"
                }}>About</a>
            </div>
        </nav>
      );
}
 
export default Navbar;