import { ethers } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { LOTTERY_CONTRACT } from '../config';


const useLotteryWrite = (functionName = '', maxPlayers = 0, entryFee = 0) => {

//   const { config } = usePrepareContractWrite({
//     ...LOTTERY_CONTRACT,
//     functionName,
//     args:[maxPlayers, ethers.utils.parseEther(entryFee.toString())]
//   });

//   const { data, isError, isLoading, write, writeAsync } = useContractWrite(config);

    const { data, isError, isLoading, isSuccess, write, writeAsync } = useContractWrite({
        mode: 'recklesslyUnprepared',
        ...LOTTERY_CONTRACT,
        functionName,
        args:[maxPlayers, ethers.utils.parseEther(entryFee.toString())]
    });

    return  { data, isError, isLoading, write, writeAsync };
}

export default useLotteryWrite;