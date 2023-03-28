import { Button, message, Modal, Space } from 'antd';
import React, { useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDeleteJob } from '../../../../hooks';

const JobListActions = React.memo(({ jobId, onDeleteSuccess }) => {
  const history = useHistory();

  const { url } = useRouteMatch();

  const onEdit = useCallback(() => {
    history.push(`${url}/edit/${jobId}`);
  }, [history, jobId, url]);

  const { deleteJob: callDeleteJob } = useDeleteJob({
    onSuccess: () => {
      message.success('Delete this job Successfully!');
      onDeleteSuccess?.();
    },
    onError: () => {
      message.error('Delete this job Failed!');
    },
  });

  const deleteJob = useCallback(
    (onSuccess) => {
      callDeleteJob({ id: jobId }, { onSuccess });
    },
    [callDeleteJob, jobId]
  );

  const openConfirmDel = useCallback(() => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure delete this job?',
      centered: true,
      onOk: (e) => {
        deleteJob(e);
      },
    });
  }, [deleteJob]);

  return (
    <Space>
      <Button onClick={onEdit} type='primary'>
        Edit
      </Button>
      <Button onClick={openConfirmDel} danger>
        Delete
      </Button>
    </Space>
  );
});

export default JobListActions;
