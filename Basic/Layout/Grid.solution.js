import React from 'react';
import { Container, Row, Col } from 'wix-style-react/Grid';

export default () => (
  <Container>
    <Row>
      <Col>I am a full row</Col>
    </Row>
    <Row>
      <Col span={6}>I take half of the size</Col>
      <Col span={6}>me too</Col>
    </Row>
    <Row>
      <Col span={4}>I take third of the size</Col>
      <Col span={4}>me too</Col>
      <Col span={4}>me too</Col>
    </Row>
    <Row>
      <Col span={4}>I take third of the size</Col>
      <Col span={8}>I take two thirds of the size</Col>
    </Row>
  </Container>
);
