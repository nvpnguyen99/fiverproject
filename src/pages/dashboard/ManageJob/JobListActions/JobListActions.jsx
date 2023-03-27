import { Button, message, Modal, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDeleteJob } from '../../../../hooks';

const JobListActions = React.memo(({ jobId, onDeleteSuccess }) => {
  const history = useHistory();

  const [isConfirmDel, setConfirmDel] = useState(false);

  const onEdit = useCallback(() => {
    history.push(`/dashboard/jobs/edit/${jobId}`);
  }, [history, jobId]);

  const openConfirmDel = useCallback(() => {
    setConfirmDel(true);
  }, []);

  const closeConfirmDel = useCallback(() => {
    setConfirmDel(false);
  }, []);

  const { deleteJob: callDeleteJob } = useDeleteJob({
    onSuccess: () => {
      message.success('Delete this job Successfully!');
      onDeleteSuccess?.();
      closeConfirmDel();
    },
    onError: () => {
      message.error('Delete this job Failed!');
    },
  });

  const deleteJob = useCallback(() => {
    callDeleteJob({ id: jobId });
  }, [callDeleteJob, jobId]);

  return (
    <>
      <Space>
        <Button onClick={onEdit} type='primary'>
          Edit
        </Button>
        <Button onClick={openConfirmDel} danger>
          Delete
        </Button>
      </Space>
      <Modal
        centered
        maskClosable={false}
        title='Warning'
        onCancel={closeConfirmDel}
        onOk={deleteJob}
        open={isConfirmDel}
      >
        Are you sure delete this job?
      </Modal>
    </>
  );
});

export default JobListActions;
