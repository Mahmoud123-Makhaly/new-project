import {  Container } from 'react-bootstrap'
import React , {useState} from 'react';
import Navs from './components/Navs';
import Header from './components/Header';
import Category from './components/Category';
import Carditem from './components/Carditem';
import { items } from './components/Data';
const App = () => {
const [itemData , setItemData] = useState(items)
//////////////////////////filtered ategory
const filteredCategory = (cat)=>{
  if(cat==="الكل"){
    setItemData(items)
  }
  else{
    const newArray = items.filter((item)=>{return item.category===cat})
    setItemData(newArray)
  }

}
/////////////extract category from object
const allCategory = ["الكل", ...new Set(items.map((item)=>{return item.category}))]
///filtered By Search
const filterBySearch = (word)=>{
if(word!==""){
  const newArr= items.filter((item)=>{
    return item.title ===word;
  
  })
  setItemData(newArr)
}
}
  return (
    <div className='font color-body'>
      <Navs filterBySearch={filterBySearch}/>
     <Container>
<Header/>
<Category filteredCategory={filteredCategory} allCategory = {allCategory}/>
<Carditem itemData={itemData}  />

     </Container>
    </div>
  )
}

export default App
