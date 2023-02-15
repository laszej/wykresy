import Axios from "axios";

import Link from "next/link";

const CoinList = ({ coinData }) => {
  console.log(coinData)
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <Link href="/coins/[id]" as={`/coins/${coin.id}`} key={coin.id}>
            <a>
              <div>
                <h1> {coin.name}</h1>
                <img src={coin.icon} />
                <p> {coin.price}</p>
                
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;
