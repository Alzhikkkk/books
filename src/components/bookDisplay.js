

function BookDisplay(props){
     return(
        <div className="search">
            {
                props.data && props.data.length>0 && props.data.map((item, index) => {
                    console.log(item)
                    return(
                        
                        <div className='search-result'>
                            <img src={item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt="bookImg"/>
                            <h2>{item.volumeInfo.title}</h2>
                        </div>
                          )     
                    })
            }
        </div>
     )
}

export default BookDisplay;