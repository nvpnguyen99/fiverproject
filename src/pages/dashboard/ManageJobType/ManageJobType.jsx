import { Button, Form, Input, message, Modal, Space, Spin, Table } from 'antd';
import React, { useCallback, useMemo, useRef } from 'react';
import { Route, useRouteMatch, useHistory } from 'react-router';
import {
  useCreateJobType,
  useDeleteJobType,
  useJobTypes,
  useUpdateJobType,
} from '../../../hooks';

const ManageJobType = React.memo(() => {
  const { data, isLoading, isFetching, refetch: refetchJobType } = useJobTypes();

  const { url, path } = useRouteMatch();

  const history = useHistory();

  const formRef = useRef(null);

  const addNewJobType = useCallback(() => {
    history.push(`${url}/create`);
  }, [history, url]);

  const dataSource = useMemo(
    () => (data || []).map((type) => ({ ...type, key: type.id })).reverse(),
    [data]
  );

  const openEditModal = useCallback(
    ({ id }) => {
      history.push(`${url}/edit/${id}`);
    },
    [history, url]
  );

  const { deleteJobType } = useDeleteJobType({
    onError: () => {
      message.error('Delete Job Type Failed');
    },
  });

  const doDeleteJobType = useCallback(
    (item, modal) => {
      modal.update({
        okButtonProps: {
          loading: true,
        },
      });
      deleteJobType(
        { id: item.id },
        {
          onSuccess: () => {
            modal.destroy();
            refetchJobType();
          },
          onSettled: () => {
            modal.update({
              okButtonProps: {
                loading: false,
              },
            });
          },
        }
      );
    },
    [deleteJobType, refetchJobType]
  );

  const openConfirmDeleteJobType = useCallback(
    (item) => {
      const modal = Modal.confirm({
        title: 'Confirm',
        content: 'Are you sure delete this job type?',
        centered: true,
        onOk(e) {
          doDeleteJobType(item, modal);
        },
      });
    },
    [doDeleteJobType]
  );

  const columnDefinition = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Job Type',
        dataIndex: 'tenLoaiCongViec',
        key: 'jobType',
      },
      {
        title: 'Action',
        render: (_, item) => (
          <Space>
            <Button onClick={() => openEditModal(item)} type='primary'>
              View & Edit
            </Button>
            <Button onClick={() => openConfirmDeleteJobType(item)} danger>
              Delete
            </Button>
          </Space>
        ),
      },
    ],
    [openEditModal, openConfirmDeleteJobType]
  );

  const closeModal = useCallback(() => {
    history.push(url);
  }, [history, url]);

  const handleOk = useCallback(async () => {
    try {
      await formRef.current?.validateFields();
      formRef.current?.submit();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const { createJobTypeAsync, isLoading: createLoading } = useCreateJobType();
  const { updateJobTypeAsync, isLoading: updateLoading } = useUpdateJobType();

  const handleCreateOrEdit = useCallback(
    async (values) => {
      try {
        await (values.id
          ? updateJobTypeAsync(values)
          : createJobTypeAsync(values));

        message.success(
          values.id
            ? 'Update Job Type Successfully'
            : 'Create Job Type Successfully'
        );
        closeModal();
        refetchJobType();
      } catch (__) {
        message.error(
          values.id ? 'Update Job Type Failed' : 'Create Job Type Failed'
        );
      }
    },
    [closeModal, createJobTypeAsync, updateJobTypeAsync, refetchJobType]
  );

  return (
    <>
      <Space className='p-2 col-lg-6 col-12' direction='vertical'>
        <Button onClick={addNewJobType} type='primary' ghost>
          Add new Job Type
        </Button>
        <Table
          loading={isFetching || isLoading}
          columns={columnDefinition}
          dataSource={dataSource}
          pagination={dataSource.length > 10}
        />
      </Space>

      <Route
        path={[`${path}/create`, `${path}/edit/:id`]}
        render={({ match }) => {
          const id = match.params.id;
          const jobType = dataSource.find(
            ({ id: jobTypeId }) => jobTypeId === Number(id)
          );

          return (
            <Modal
              title='Job Type'
              open
              centered
              onOk={handleOk}
              onCancel={closeModal}
              confirmLoading={createLoading || updateLoading}
            >
              {!isLoading && (
                <Form
                  onFinish={handleCreateOrEdit}
                  ref={formRef}
                  initialValues={jobType}
                  layout='vertical'
                >
                  <Spin spinning={createLoading || updateLoading}>
                    <div className='d-flex flex-row justify-content-around'>
                      <Form.Item label='ID' name='id'>
                        <Input disabled placeholder='ID' />
                      </Form.Item>
                      <Form.Item
                        name='tenLoaiCongViec'
                        label='Job Type Name'
                        rules={[
                          {
                            required: true,
                            message: 'Please Enter the Job Type Name',
                          },
                        ]}
                      >
                        <Input placeholder='Enter the Job Type Name' />
                      </Form.Item>
                    </div>
                  </Spin>
                </Form>
              )}
            </Modal>
          );
        }}
      />
    </>
  );
});

export default ManageJobType;
