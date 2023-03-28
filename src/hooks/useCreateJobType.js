import { useMutation } from '@tanstack/react-query';
import { LoaiCongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useCreateJobType = (options) => {
  const { token } = useToken();

  const {
    mutate: createJobType,
    mutateAsync: createJobTypeAsync,
    data,
    isLoading,
    error,
  } = useMutation({
    ...options,
    mutationKey: 'createJobType',
    mutationFn: (data) =>
      new LoaiCongViecApi()
        .post(TOKEN_CYBERSOFT, { token, model: data })
        .then((jobType) => jobType.content),
  });
  return { createJobTypeAsync, createJobType, data, isLoading, error };
};

export default useCreateJobType;
