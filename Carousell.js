import 'bootstrap/dist/css/bootstrap.min.css';
import  { Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import banner from './images/Home/banner1.jpg'
import Img1 from './images/Home/Chennai.jpeg';
import Img2 from './images/Home/Kodaikanal.jpeg';
import { HashLink as Link } from 'react-router-hash-link';

const Carousell = () => {
  return (
  
          <div className=" container">

            <Carousel className='carousel-1'>
            <Carousel.Item>
                <Image className="d-block w-100 carousel-image" src={banner} alt="" width="70%"/>
                <Carousel.Caption>
                  Chennai
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 carousel-image" src={Img1} alt="" width="70%"/>
                <Carousel.Caption>
                  Chennai
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100 carousel-image" src={Img2}  alt="" width="70%"/>
              <Carousel.Caption>
                 Kodaikanal
              </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
  <div className='container text-center mt-3'> 
     <h4 className='h-1'> Tourist places To Tamilnadu </h4>
    <h4 className='h-1'> Here Are The Top places to Visit In TamilNadu In 2023  </h4>
</div>

<div className=" container  mt-4  ">
  <div className=" row  text-center  ">
    <div className=" col-sm ">
    <Link to="#chennai" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
      Chennai</Link>
      </div>
      <div className="col-sm">
    <Link to="#kodaikanal" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
      Kodaikanal
        </Link>
        </div>
        <div className="col-sm">
        <Link to="#Madurai" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
          Madurai
        </Link>
        </div>
        <div className="col-sm">
        <Link to="#Kumbakonam" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
         Kumbakonam
        </Link>
        </div>
        <div className="col-sm">
        <Link to="#Rameshwaram" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
          Rameshwaram
        </Link>
        </div>
        </div>
        </div>


    <div className=" container  anc2 mt-1 mb-2 ">
      <div className=" row  text-center  ">
            <div className=" col-sm ">
            <Link to="#Theni" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
          Theni
        </Link>
        </div>
        <div className="col-sm">
        <Link to="#Ooty" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
          Ooty
        </Link>
        </div>
        <div className="col-sm">
        <Link to="#Kanyakumari" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
          Kanyakumari
        </Link>
        </div>
        <div className="col-sm">
        <Link to="#Yarcaud" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
           Yarcaud
        </Link>
        </div>
        <div className="col-sm">
        <Link to="#Hogenakkal" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>
          Hogenakkal
        </Link>
        </div>
         </div>
         </div>
         </div>
  );
};

export default Carousell
