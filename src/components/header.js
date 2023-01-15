function Header(props){
    return(
       <header className="header">
            <div className="header-logo">
                BookLibrary
            </div>

            <div className="header-links">
                  <a href="#" key={1}>About</a>
                  <a href="#" key={2}>Genres</a>
                  <a href="#" key={3}>Books</a>
                  <a href="#" key={4}>Favorites</a>
            </div>

            
       </header>
    )
}


export default (Header);