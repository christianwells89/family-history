import React, { useState } from 'react';
import { Divider, Button, Tooltip } from 'antd';

function File() {
  // TODO use Redux to get current family name and dirty status
  const [family, setFamily] = useState('Wells');
  const [dirty, setDirty] = useState(false);

  // eslint-disable-next-line
  function handleFamilyChange(value) {
    setFamily(value);
  }

  // eslint-disable-next-line
  function handleDirtyChange(value) {
    setDirty(value);
  }

  // The family name could have a popover showing stats eg. how many people in the file

  return (
    <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
      <span>{family} Family</span>
      <Divider type="vertical" />
      <Tooltip placement="bottom" title={dirty ? 'Save' : 'No changes to save'}>
        <Button type="primary" shape="circle" icon="save" disabled={!dirty} />
      </Tooltip>
      <Divider type="vertical" />
      <Tooltip placement="bottom" title="Load a different file">
        <Button type="primary" shape="circle" icon="folder-open" />
      </Tooltip>
    </div>
  );
}

export default File;
