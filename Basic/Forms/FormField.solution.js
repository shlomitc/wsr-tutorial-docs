import React, { useState } from 'react';
import { Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';
import './App.scss';

const FormFieldWithCharCount = () => {
  const [charCount, setCharCount] = useState(0);
  const onChange = event => setCharCount(event.target.value.length);
  return (
    <FormField
      required
      label="my unique field"
      infoContent="OMG"
      charCount={5 - charCount}
    >
      <Input onChange={onChange} />
    </FormField>
  );
};

export default () => (
  <Card>
    <Card.Header title="first card" />
    <Card.Content>
      <Row>
        <Col span={4}>
          <FormFieldWithCharCount />
        </Col>
      </Row>
    </Card.Content>
  </Card>
);
