import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const Category = ({filteredCategory , allCategory}) => {
const onFilter =(cat)=>{
  filteredCategory(cat)
}
  return (
    <Row>
<Fade>
<div className='cat-btns text-center d-flex justify-content-center'>
{
allCategory.length?(
  allCategory.map((item , index)=>{return(
    <button key={index}   onClick={()=>{onFilter(item)}}   className="btn mx-2">{item}</button>
  )})
):(<h2>لاتوجد اصناف جديدة</h2>)
}

</div>
</Fade>
     </Row>

  )
}

export default Category
//<

//         <button key={index}   onClick={()=>{onFilter("الكل")}}   className="btn mx-2">"الكل"</button>

// <button onClick={()=>{onFilter("فطار")}}   className="btn mx-2">فطار</button>
// <button onClick={()=>{onFilter("غداء")}}  className="btn mx-2">غداء</button>
// <button onClick={()=>{onFilter("عشاء")}}   className="btn mx-2">عشاء</button>