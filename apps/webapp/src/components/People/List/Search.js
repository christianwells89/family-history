import React, { useState } from 'react';
import { Form, Input, Card } from 'antd';

function PeopleSearch(props) {
  const [terms, setTerms] = useState('');

  function handleTermsChange(event) {
    setTerms(event.target.value);
    props.search(terms);
  }

  return (
    <div>
      <Card>
        <Form layout="horizontal">
          <Form.Item label="Name">
            <Input value={terms} onChange={handleTermsChange} />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default PeopleSearch;
