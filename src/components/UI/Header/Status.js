import React from 'react';
import { Divider, Button, Tooltip } from 'antd';

function Status(props) {
  if (!props.isLoaded) return null;

  // The family name could have a popover showing stats eg. how many people in the file

  return (
    <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
      <span>{props.familyName} Family</span>
      <Divider type="vertical" />
      <Tooltip placement="bottom" title={props.isDirty ? 'Save' : 'No changes to save'}>
        <Button type="primary" shape="circle" icon="save" disabled={!props.isDirty} />
      </Tooltip>
      <Divider type="vertical" />
      <Tooltip placement="bottom" title="Load a different file">
        <Button type="primary" shape="circle" icon="folder-open" />
      </Tooltip>
    </div>
  );
}

export default Status;
