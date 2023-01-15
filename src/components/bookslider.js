import book1984 from '../assets/1984.jpg';
import rescue from '../assets/rescue.jpg';
import flowers from '../assets/flowers.jpeg';
import alhimik from '../assets/alhimik.jpeg';
import reasons from '../assets/reasons.jpg';
import atomic from '../assets/atomic.jpeg';
import Slider from "react-slick";

function BookSlider(){
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return(
        <div className='bookslider'>
            <Slider {...settings}>
                    <div className='bookslider-item'>
                        <img src={book1984} Alt="1984"/>
                         <h2>1984</h2>
                         <h1>George Orwell</h1>
                    </div>
                    <div className='bookslider-item'>
                         <img src={rescue} Alt="Rescue"/>
                         <h2>The rescue</h2>
                         <h1>Nicholas Sparks</h1>
                    </div>
                    <div className='bookslider-item'>
                        <img src={alhimik} Alt="Alhimik"/>
                         <h2>The Alchemist</h2>
                         <h1>Paulo Coelho</h1>
                    </div>
                    <div className='bookslider-item'>
                        <img src={flowers} Alt="Flowers"/>
                         <h2>Flowers for Algernon</h2>
                         <h1>Daniel Keyes</h1>
                    </div>
                    <div className='bookslider-item'>
                        <img src={reasons} Alt="Reasons"/>
                         <h2>13 Reasons Why</h2>
                         <h1>Jay Asher</h1>
                    </div>
                    <div className='bookslider-item'>
                        <img src={atomic} Alt="Atomic"/>
                         <h2>Atomic Habits</h2>
                         <h1>James Clear</h1>
                    </div>
            </Slider>
        </div>
    )
}

export default BookSlider;