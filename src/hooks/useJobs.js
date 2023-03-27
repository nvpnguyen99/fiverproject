import { useQuery } from '@tanstack/react-query';
import { CongViecApi } from '../http-access';
import { TOKEN_CYBERSOFT } from '../util/settings/config';
import useToken from './useToken';

const useJobs = () => {
  const { token } = useToken();
  const res = useQuery({
    queryKey: ['jobs'],
    queryFn: () =>
      new CongViecApi().get(TOKEN_CYBERSOFT, token).then((res) => res.content),
  });
  return res;
};

export default useJobs;
