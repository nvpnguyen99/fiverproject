import { Button, Image, Modal, Space, Table } from 'antd';
import React, { useCallback, useMemo, useRef } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useJobs } from '../../../hooks';
import JobDetailForm from './JobDetailForm';
import JobListActions from './JobListActions';

const dataColumnDefine = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'tenCongViec',
    key: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'hinhAnh',
    key: 'image',
    render: (img) => <Image width={150} src={img} />,
  },
  {
    title: 'Description',
    dataIndex: 'moTaNgan',
    key: 'description',
  },
  {
    title: '$Price',
    dataIndex: 'giaTien',
    key: 'price',
  },
  {
    title: 'Rate',
    dataIndex: 'danhGia',
    key: 'rate',
  },
];

const ManageJob = React.memo(() => {
  const { data: jobs, refetch: refetchJobs } = useJobs();

  const history = useHistory();

  const dataSource = useMemo(
    () => jobs?.map((job) => ({ ...job, key: job.id })).reverse(),
    [jobs]
  );

  const addOrEditFormRef = useRef(null);

  const addNewJob = useCallback(() => {
    history.push('/dashboard/jobs/create');
  }, [history]);

  const onCancelAddNewJob = useCallback(() => {
    history.push('/dashboard/jobs');
  }, [history]);

  const handleOk = useCallback(async () => {
    const formInstance = addOrEditFormRef.current;
    if (!formInstance) {
      return;
    }
    try {
      await formInstance.validateFields();
      formInstance.submit();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmitSuccess = useCallback(() => {
    onCancelAddNewJob();
    refetchJobs();
  }, [onCancelAddNewJob, refetchJobs]);

  const modalProps = {
    onCancel: onCancelAddNewJob,
    onOk: handleOk,
    open: true,
    centered: true,
    bodyStyle: { overflowY: 'auto', maxHeight: '598px' },
    maskClosable: false,
  };

  const columnDefinition = useMemo(
    () => [
      ...dataColumnDefine,
      {
        title: 'Action',
        key: 'action',
        render: (__, item) => (
          <JobListActions onDeleteSuccess={refetchJobs} jobId={item.id} />
        ),
      },
    ],
    [refetchJobs]
  );

  return (
    <>
      <Space className='p-2' direction='vertical'>
        <Button onClick={addNewJob} type='primary' ghost>
          Add new Job
        </Button>
        <Table columns={columnDefinition} dataSource={dataSource} />
      </Space>

      <Route
        path={['/dashboard/jobs/create', '/dashboard/jobs/edit/:id']}
        render={({ match }) => {
          const jobId = match?.params?.id;

          const job = dataSource?.find(
            ({ id }) => id === Number(match.params.id)
          );
          return (
            <>
              {((jobId && Boolean(dataSource?.length)) || !jobId) && (
                <Modal
                  {...modalProps}
                  title={
                    !jobId
                      ? 'ADD NEW JOB'
                      : `EDIT ${job?.tenCongViec.toUpperCase()} JOB`
                  }
                >
                  <JobDetailForm
                    onSubmitSuccess={handleSubmitSuccess}
                    ref={addOrEditFormRef}
                    job={job}
                  />
                </Modal>
              )}
            </>
          );
        }}
      />
    </>
  );
});

export default ManageJob;
