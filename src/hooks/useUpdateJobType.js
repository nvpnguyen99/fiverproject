import { useMutation } from '@tanstack/react-query';
import { LoaiCongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useUpdateJobType = (options) => {
  const { token } = useToken();

  const {
    mutate: updateJobType,
    mutateAsync: updateJobTypeAsync,
    data,
    isLoading,
    error,
  } = useMutation({
    ...options,
    mutationKey: 'UpdateJobType',
    mutationFn: (data) =>
      new LoaiCongViecApi()
        .put(data.id, TOKEN_CYBERSOFT, { token, model: data })
        .then((job) => job.content),
  });
  return { updateJobTypeAsync, updateJobType, data, isLoading, error };
};

export default useUpdateJobType;
