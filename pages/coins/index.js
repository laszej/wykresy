import Axios from "axios";

import Link from "next/link";

const CoinList = ({ coinData }) => {
  console.log(coinData)
  return (
    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap",  justifyContent: "center", textDecoration: "none"}}>
      {coinData.coins.map((coin) => {
        return (
            <Link href="/coins/[id]" as={`/coins/${coin.id}`} style={{textDecoration: "none"}} key={coin.id}  >
            
            <div style={{display: "flex", flexDirection: "column", margin: "3rem", alignItems: "center"}}>
            <h3>{coin.name}</h3>
            <img src={coin.icon} alt={coinData.name} height={100} width={100} />
            <p>{coin.price}</p>
            </div>
            
           
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
