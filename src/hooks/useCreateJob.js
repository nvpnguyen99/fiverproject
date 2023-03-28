import { useMutation } from '@tanstack/react-query';
import { CongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useCreateJob = (options) => {
  const { token } = useToken();

  const {
    mutate: createJob,
    mutateAsync: createJobAsync,
    data,
    isLoading,
    error,
  } = useMutation({
    ...options,
    mutationKey: 'createJob',
    mutationFn: (data) =>
      new CongViecApi()
        .post(TOKEN_CYBERSOFT, { token, model: data })
        .then((job) => job.content),
  });
  return { createJobAsync, createJob, data, isLoading, error };
};

export default useCreateJob;
