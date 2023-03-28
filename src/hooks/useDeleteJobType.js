import { useMutation } from '@tanstack/react-query';
import { CongViecApi, LoaiCongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useDeleteJobType = (options) => {
  const { token } = useToken();

  const {
    mutate: deleteJobType,
    mutateAsync: deleteJobTypeAsync,
    data,
    isLoading,
    error,
  } = useMutation({
    ...options,
    mutationKey: 'DeleteJobType',
    mutationFn: (data) =>
      new LoaiCongViecApi()
        .callDelete(data.id, TOKEN_CYBERSOFT, { token })
        .then((job) => job.content),
  });
  return { deleteJobTypeAsync, deleteJobType, data, isLoading, error };
};

export default useDeleteJobType;
