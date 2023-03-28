import { useQuery } from '@tanstack/react-query';
import { LoaiCongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';

const useJobTypes = () => {
  const res = useQuery({
    queryKey: ['jobTypes'],
    queryFn: () =>
      new LoaiCongViecApi().get(TOKEN_CYBERSOFT).then((res) => res.content),
  });
  return res;
};

export default useJobTypes;
