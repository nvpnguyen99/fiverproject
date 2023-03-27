import { useMutation } from '@tanstack/react-query';
import { CongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useDeleteJob = (options) => {
  const { token } = useToken();

  const {
    mutate: deleteJob,
    mutateAsync: deleteJobAsync,
    data,
    isLoading,
    error,
  } = useMutation({
    ...options,
    mutationKey: 'DeleteJob',
    mutationFn: (data) =>
      new CongViecApi()
        .callDelete(data.id, TOKEN_CYBERSOFT, { token })
        .then((job) => job.content),
  });
  return { deleteJobAsync, deleteJob, data, isLoading, error };
};

export default useDeleteJob;
