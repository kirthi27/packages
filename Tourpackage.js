import {React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import {Table, Button, Modal } from 'react-bootstrap';
import ooty from '../time/Gallery/ooty1.jpeg'; 
import mad from '../time/Gallery/madurai1.jpeg';
import kodai from '../time/Gallery/kodaikanal3.jpeg';
import ram from '../time/Gallery/rameshwaram1.jpeg';
import yer from '../time/Gallery/yercaud1.jpeg';
import theni from '../time/Gallery/theni1.jpeg';
  
const records = [{  
        title:'Madurai, Rameswaram, Kanyakumari',
      pack_age: ' Madurai, Rameswaram, Kanyakumari	',  
        price: '₹ 20,000*	',
        days :'3 Nights / 4 Days',
        inclusion :	'Hotels, Car, Sightseeing, Meals',
        quotes : 'Get>',
        images: mad,

        },{  
          title:'Ooty',
          pack_age: ' Ooty	',  
          price: '₹ 11,500*	',
          days :'5 Nights / 6 Days',
          inclusion :	'Hotels, Car, Sightseeing, Meals',
          quotes : 'Get>',
          images: kodai,
         },{  
          title:'Kumbakonam, Thanjuvar, Rameswaram',
          pack_age: 'Kumbakonam, Thanjuvar, Rameswaram	',  
          price: '₹ 28,000*	',
          days :'3 Nights / 4 Days',
          inclusion :	'Hotels, Car, Sightseeing, Meals',
          quotes : 'Get>',
          images: ram,
           },{  
            title:'Yercaud,Theni',
            pack_age: 'Yercaud,Theni',  
            price: '₹ 10,000*	',
            days :'3 Nights / 4 Days',
            inclusion :	'Hotels, Car, Sightseeing, Meals',
            quotes : 'Get>',
            images : yer,
             },{  
              title:'Ooty,Kodaikanal',
              pack_age: 'Ooty,Kodaikanal	',  
              price: '₹ 15,000*	',
              days :'3 Nights / 4 Days',
              inclusion :	'Hotels, Car, Sightseeing, Meals',
              quotes : 'Get>',
              images : ooty,
               },{  
                title:'Hogenakkal,Theni',
                pack_age: 'Hogenakkal,Theni',  
                price: '₹ 12,000*	',
                days :'3 Nights / 4 Days',
                inclusion :	'Hotels, Car, Sightseeing, Meals',
                quotes : 'Get>',
                images: theni,
                 }]  

    
const Tourpackage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div
    class = "imprice"
    style = {{
       height: "850px",
       width: "1700px",
       backgroundImage:
       'url("https://encrypted-tbn0.gstatic.com/imprices?q=tbn:ANd9GcQS-X4W1VfFzN3h2OKxef6bZVPb_EwbfJhTznry-mcdqMWrgZej3pPiAZXJyvJY6dI0joI&usqp=CAU")',
       backgroundSize: "contain",
       backgroundRepeat: "no-repeat",
           
    }}>
     <h2>"Enchanting Tamil Nadu"</h2><br></br>
<h3>Tamil Nadu, India</h3><br></br>
<p style={{textAlign:'centre'}}>Situated along the Bay of Bengal in south India, 
  Tamil Nadu is one of India's most well-known tourist destinations owing to its natural splendour, <br></br>
  unique culture as well as religious significance. 
  The state boasts of a plethora of religious sites that attract pilgrims, historical attractions,
  <br></br> vast plantations, mesmerising hill stations, diverse wildlife, delicious cuisine and loads of festivities.</p>

 <Table striped bordered hover className='mt-5'
 style={{
  backgroundColor:'blueviolet',
  color:'blueviolet',
  width:'70%',}
 }>
      <thead>
        <tr>
        <th className='text-center'  style={{color:'blueviolet'}}>Package</th>
          <th className='text-center' style={{color:'blueviolet'}}>Price</th>
          <th className='text-center' style={{color:'blueviolet'}}>Days</th>
          <th className='text-center' style={{color:'blueviolet'}}>Inclusion</th>
          <th className='text-center' style={{color:'blueviolet'}}>Details</th> 
        </tr>
      </thead>
      <tbody>
        
        {records.map((data,idx) => (
        
        <tr key={idx}>
            <td className='text-left ' style={{width:'10px',color:'blueviolet'}}>{data.pack_age}</td>
             <td className='text-center' style={{width:'20px',color:'blueviolet'}}>{data.price} per person </td>
             <td className='text-center' style={{width:'20px',color:'blueviolet'}}>{data.days} </td>
             <td className='text-center' style={{width:'20px',color:'blueviolet'}}>{data.inclusion}</td>
             <td className='text-center' style={{width:'10px',color:'blueviolet'}}>
            <Button onClick={handleShow}>View images</Button></td>
            
        </tr>))
}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
        </Modal.Header>
        {records.map((data,idx) => (
                // mainSrc={data.images}
                // nextSrc={data[(idx + 1) % images.length].images}
                // prevSrc={data[(idx + images.length - 1) % images.length].images}
         
         <img key={idx} src={data.images} alt='' style={{height:'500px'}}/>
        ))}
            
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
      </tbody>
    </Table>

   
        
    
</div>  
  )
}

 export default Tourpackage
