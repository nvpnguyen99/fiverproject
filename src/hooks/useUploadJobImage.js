import { useMutation } from '@tanstack/react-query';
import { CongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useUploadJobImage = (options) => {
  const { token } = useToken();

  const {
    mutate: uploadJobImage,
    mutateAsync: uploadJobImageAsync,
    data,
    isLoading,
    error,
  } = useMutation({
    ...options,
    mutationKey: 'uploadJobImage',
    mutationFn: (data) =>
      new CongViecApi().uploadHinhNhomLoai(data.jobId, TOKEN_CYBERSOFT, {
        token,
        formFile: data.file,
      }),
  });
  return { uploadJobImageAsync, uploadJobImage, data, isLoading, error };
};

export default useUploadJobImage;
