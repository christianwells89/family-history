import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'View',
    key: 'button',
    render: (text, record) => (
      // this is a hack because the antd button can't take a component as prop right now, and its href doesn't transition smoothly
      // TODO make the whole row clickable instead
      <Link className="ant-btn ant-btn-primary" to={`/people/${record.id}`}>
        <Icon type="export" />
      </Link>
    ),
    // <Button type="primary" icon="export" href={`/people/${record.id}`} />,
  },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Gender', dataIndex: 'gender', render: g => <span>{g === 'male' ? 'M' : 'F'}</span> },
  {
    title: 'Age',
    dataIndex: 'dob',
    key: 'age',
    render: dob => <span>{moment().diff(dob, 'years')}</span>,
  },
];

function PeopleList(props) {
  const [people] = useState(props.people);

  return <Table columns={columns} dataSource={people} rowKey="id" />;
}

export default PeopleList;
