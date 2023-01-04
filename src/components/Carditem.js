import React from 'react'
import Flip from 'react-reveal/Flip';
import { Row  , Col, Card } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const Carditem = ({itemData}) => {
  return (
  <Row>
 {
  itemData.length?(
    itemData.map((item , index)=>{
      return(
     <Zoom>
         <Col key={index} sm="12">
        <Card className="d-flex flex-row mb-3">
                <Card.Img variant="top" src={item.src} className="img-card"/>
                <Card.Body>
               <div className='card-title d-flex justify-content-between'>
               <Card.Title className='mb-2'>  {item.title} </Card.Title>
               <Card.Title className="card-price">{item.price}</Card.Title>
               </div>
                  <Card.Text>
                 <p className='card-text'>
    {item.desc}
                 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
     </Zoom>
      )
    })
  ):(<h3 className="text-center">لاتوجد اصناف جديدة</h3>)
 }
  </Row>
  )
}

export default Carditem

