import React, { useState } from 'react'
import { Navbar , Container , Form ,Button, Row } from 'react-bootstrap'
const Navs = ({filterBySearch}) => {
  const [searchValue , setSearchValue] = useState("");
const onSearch  =()=>{
  filterBySearch(searchValue)
}
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#"><p className='brand-color'>مطعم جديد</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       
          <Form className="d-flex me-auto my-3 my-lg-0">
            <Form.Control
              type="search"
              placeholder="ابحث"
              className="mx-2"
              aria-label="Search"
              onChange={(e)=>{setSearchValue(e.target.value)}}
              value={searchValue}
          
            />
            <Button onClick={()=>{onSearch()}} className='btn-search'>ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default Navs
