import { useMutation } from '@tanstack/react-query';
import { CongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useUpdateJob = (options) => {
  const { token } = useToken();

  const {
    mutate: updateJob,
    mutateAsync: updateJobAsync,
    data,
    isLoading,
    error,
  } = useMutation({
    ...options,
    mutationKey: 'UpdateJob',
    mutationFn: (data) =>
      new CongViecApi()
        .put(data.id, TOKEN_CYBERSOFT, { token, model: data })
        .then((job) => job.content),
  });
  return { updateJobAsync, updateJob, data, isLoading, error };
};

export default useUpdateJob;
