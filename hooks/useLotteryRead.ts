import { useContractRead } from 'wagmi';
import { LOTTERY_CONTRACT } from '../config';

const useLotteryRead = (functionName='') => {

  const { data, isError, isLoading } = useContractRead({
    ...LOTTERY_CONTRACT,
      functionName,
  });

  return  { data, isError, isLoading }
}

export default useLotteryRead;

