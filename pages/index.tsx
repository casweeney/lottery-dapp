import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAccount } from "wagmi";
import useLotteryRead from "../hooks/useLotteryRead";

const Home: NextPage = () => {
  const {address} = useAccount();
  const {data:gameStarted, isError, isLoading} = useLotteryRead("gameStarted");
  const {data:owner, isError:ownerError, isLoading:ownerLoading} = useLotteryRead("owner");
  console.log("Game started: ", gameStarted, "Connected address: ", address);
  console.log("Owner: ", owner);
  return (
    <>
      <div className="grid w-11/12 grid-cols-1 gap-8 lg:grid-cols-2 mx-auto mt-10">
          <div>
            <Image className="rounded-md" src='https://source.unsplash.com/random/?productivity,city' width={700} height={500}  />
          </div>

          <div className="self-center">
            <div className="flex flex-col items-center">
              <input className="w-3/4 p-2 my-6 text-center border rounded-md" type="number" placeholder="Enter game with ETH" />
              <button className="w-full p-2 text-white bg-green-600 border-0 rounded-md">Join Game</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
