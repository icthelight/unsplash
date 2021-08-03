import React from 'react';
import styled from 'styled-components'
import PhotoItem from "../Item/PhotoItem";


const GridList = ({data = [], renderItem}) => {
    return (
        <Container>
            <Row>
                {
                    data.map((item, index) => (
                        <Col key={index}>
                            {renderItem(item)}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 10px;    
`;

export default GridList;