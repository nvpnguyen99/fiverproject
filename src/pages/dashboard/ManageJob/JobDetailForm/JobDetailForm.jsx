import { Button, Form, Image, Input, InputNumber, message, Space } from 'antd';
import { merge, omit } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  useCreateJob,
  useUpdateJob,
  useUploadJobImage,
} from '../../../../hooks';

const JobDetailForm = React.memo(
  React.forwardRef(({ job, onSubmitSuccess }, ref) => {
    const fileRef = useRef(null);

    const uploadFileClick = useCallback(() => {
      fileRef.current.input.click();
    }, []);

    const [file, setFile] = useState(null);

    const handleFileChange = useCallback((event) => {
      if (!event.target.files) {
        setFile(null);
        return;
      }
      setFile(event.target.files[0]);
    }, []);

    const [previewFile, setPreviewFile] = useState(null);

    useEffect(() => {
      if (!file) {
        setPreviewFile(null);
        return;
      }
      var reader = new FileReader();

      reader.onload = function (e) {
        setPreviewFile(e.target.result);
      };

      reader.readAsDataURL(file);
    }, [file]);

    const { uploadJobImageAsync } = useUploadJobImage({
      onError: () => {
        message.error('Upload Image this job Failed!');
      },
    });
    const { createJobAsync } = useCreateJob({
      onError: () => {
        message.error('Create this job Failed!');
      },
    });

    const { updateJobAsync } = useUpdateJob({
      onError: () => {
        message.error('Update this job Failed!');
      },
    });

    const jobId = job?.id;
    const handleSubmit = useCallback(
      async (values) => {
        const job = await (jobId
          ? updateJobAsync(omit(merge({}, values, { id: jobId }), 'hinhAnh'))
          : createJobAsync(omit(values, 'hinhAnh')));

        if (values.hinhAnh instanceof File) {
          await uploadJobImageAsync({ jobId: job.id, file: values.hinhAnh });
        }

        message.success(`${jobId ? 'Edit' : 'Create'} Job Success!`);
        onSubmitSuccess?.();
      },
      [
        createJobAsync,
        jobId,
        onSubmitSuccess,
        updateJobAsync,
        uploadJobImageAsync,
      ]
    );

    return (
      <Form
        initialValues={job}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        ref={ref}
        onFinish={handleSubmit}
      >
        <Form.Item
          rules={[{ required: true, message: 'Please Enter the Job Name' }]}
          name='tenCongViec'
          label='Job Name'
        >
          <Input placeholder='Enter the Job Name' />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: 'Please Enter the Description' }]}
          name='moTa'
          label='Description'
        >
          <Input.TextArea rows={2} placeholder='Enter the Description' />
        </Form.Item>

        <Form.Item
          name='moTaNgan'
          rules={[
            { required: true, message: 'Please Enter the Short Description' },
          ]}
          label='Short Description'
        >
          <Input.TextArea rows={2} placeholder='Enter the Short Description' />
        </Form.Item>

        <Form.Item
          name='giaTien'
          rules={[{ required: true, message: 'Please Enter the Price' }]}
          label='Price'
        >
          <InputNumber
            className='w-100'
            min={0}
            placeholder='Enter the Price'
          />
        </Form.Item>

        <Form.Item
          name='danhGia'
          rules={[{ required: true, message: 'Please Enter the Rate' }]}
          label='Rate'
        >
          <InputNumber className='w-100' min={0} placeholder='Enter the Rate' />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: 'Please Enter the Detail Code' }]}
          name='maChiTietLoaiCongViec'
          label='Detail Code'
        >
          <Input placeholder='Enter the Detail Code' />
        </Form.Item>

        <Form.Item
          name='saoCongViec'
          rules={[{ required: true, message: 'Please Enter the Star Ratting' }]}
          label='Star Ratting'
        >
          <InputNumber
            className='w-100'
            min={0}
            max={5}
            placeholder='Enter the Star Ratting'
          />
        </Form.Item>

        <Form.Item
          name='hinhAnh'
          rules={[{ required: true, message: 'Please Upload the Image' }]}
          className='d-flex flex-row justify-content-end'
          getValueFromEvent={(event) => event.target.files[0]}
        >
          <Space>
            {(previewFile || job?.hinhAnh) && (
              <Image width={200} src={previewFile || job?.hinhAnh} />
            )}
            <Input
              onChange={handleFileChange}
              ref={fileRef}
              hidden
              type='file'
            />
            <Button onClick={uploadFileClick} type='primary'>
              Upload Image
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  })
);

export default JobDetailForm;
