import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAccount } from "wagmi";
import useLotteryRead from "../hooks/useLotteryRead";
import useLotteryWrite from "../hooks/useLotteryWrite";
import { ethers } from 'ethers'

const Home: NextPage = () => {
  const {address} = useAccount();

  const {data:gameStarted, isError, isLoading} = useLotteryRead("gameStarted");

  const {data:owner, isError:ownerError, isLoading:ownerLoading} = useLotteryRead("owner");

  const {data:maxPlayers, isError:maxPlayersError, isLoading:maxPlayersLoading} = useLotteryRead("maxPlayers");

  const {data:entryFee, isError:entryFeeError, isLoading:entryFeeLoading} = useLotteryRead("entryFee");

  console.log("Game started: ", gameStarted, "Connected address: ", address);
  console.log("Owner: ", owner);
  console.log("Max players: ", Number(maxPlayers));
  //console.log("Entry fee: ", );

  const { writeAsync, data:writeData, isLoading:writeLoading, isError:writeError } = useLotteryWrite("startGame", 3, 0.3);

  return (
    <>
      <div className="grid w-11/12 grid-cols-1 gap-8 lg:grid-cols-2 mx-auto mt-10">
          <div>
            <Image className="rounded-md" src='https://source.unsplash.com/random/?productivity,city' width={700} height={500}  />
          </div>

          <div className="self-center">
            <div className="flex flex-col items-center">
              <p>{entryFee && ethers.utils.formatEther(entryFee)}</p>
              <input className="w-3/4 p-2 my-6 text-center border rounded-md" type="number" placeholder="Enter game with ETH" />
              <button className="w-full p-2 text-white bg-green-600 border-0 rounded-md mb-3">Join Game</button>
              {
                address === owner && <button className="w-full p-2 text-white bg-gray-600 border-0 rounded-md"  onClick={() => writeAsync?.()}> {writeLoading ? "Loading..." : "Start Game"} </button>
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
