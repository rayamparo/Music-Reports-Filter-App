import React, { useState, useContext } from 'react';
import axios from 'axios';
// Form Component
import InfoTable from '../Components/InfoTable'
// Context
import { FilterContext } from '../utils/Filter';
//Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SecInfo = () => {
   const h4Style = {
      marginTop: '1%',
      marginBottom: '-3%'
   };

   const formStyle = {
      background: '#eef2f7',
      textAlign: 'center',
      marginTop: '5%'
  };

  const btnStyle = {
      marginTop:'1%',
      marginBottom: '1%'
   }

   const formTitleStyle = {
      marginTop: '1%'
   }

   // Handle change for input
   const handleChange = e => {
      e.preventDefault();
      setTagFitler(e.target.value);
  }

  // useState for filter
  const [tagFilter, setTagFitler] = useState('');

  // Error
  const [err, setError] = useState(null);

  // useContext for Filter Data
  // const { filterInfo } = useContext(FilterContext);
  const { ['secFilterInfo']: [secFilterInfo, setSecFilterInfo], } = useContext(FilterContext);

  // Grabs the API data
  const getData = async () => {
      if(tagFilter === '') {
          await axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
          setSecFilterInfo(res.data);
          }).catch((error) => {
              setError(error);
          })
      } else {
          await axios.get(`https://jsonplaceholder.typicode.com/todos?title=${tagFilter}`).then((res) => {
              setSecFilterInfo(res.data);
          }).catch((error) => {
              setError(error);
              console.log(err.message);
          })
          }
  }


   // Handles the search button
   const searchHandler = () => {
      getData();
   }

   return(
      <div>
         <h4 style={h4Style}>Second Info Page</h4>
         <Container style={formStyle}>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                            <Form.Label style={formTitleStyle}>Search By Title</Form.Label>
                            <Form.Control onChange={handleChange} value={tagFilter} type="text" placeholder="Title" />
                            </Col>
                        </Row>
                        <Row>
                           <Form.Label style={formTitleStyle}>Or Click The Search Button Below To Render Top 5 Titles</Form.Label>
                        </Row>
                        <Button style={btnStyle} onClick={() => {searchHandler()}} variant="primary">
                           Search
                        </Button>
                    </Form.Group>
                </Form>
         {secFilterInfo.length > 0 && <InfoTable data={secFilterInfo}/>}
         </Container>
      </div>
   )
};

export default SecInfo;