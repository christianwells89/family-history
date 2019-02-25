import React, { useState } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';

const Option = Select.Option;

function PersonDeatils({ person }) {
  const [name, setName] = useState(person.name);
  const [gender, setGender] = useState(person.gender);

  // Formik will eventually handle this
  function handleNameChange(event) {
    // props.onNameChange
    setName(event.target.value);
  }

  function handleGenderChange(value) {
    // props.onGenderChange
    setGender(value);
  }

  return (
    <div>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Name">
              <Input value={name} onChange={handleNameChange} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label="Gender">
              <Select value={gender} onChange={handleGenderChange}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="unknown">Unknown</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Button type="primary">Save</Button>
        </Row>
      </Form>
    </div>
  );
}

export default PersonDeatils;
