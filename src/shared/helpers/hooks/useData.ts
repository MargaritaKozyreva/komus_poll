import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useData = <T>(
	fn: () => Promise<AxiosResponse<T>>,
  deps: any[] = []
) => {
const [data, setData] = useState<T | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [isError, setIsError] = useState<boolean>(false);

useEffect(() => {
  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await fn();
      setData(res.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  getData();
}, deps);

return {data, isLoading, isError}
}

