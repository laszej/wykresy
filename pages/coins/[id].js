import Axios from "axios";



const Coin = ({ coinData }) => {
  console.log(coinData)
  if (!coinData) {
    console.error('Coin data is not available');
    return null;
  }
  if (!coinData.coin.name || !coinData.coin.icon || !coinData.coin.price) {
    console.error('Coin data is missing one or more properties');
    return null;
  }
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>{coinData.coin.name}</h1>
      <img src={coinData.coin.icon} alt={coinData.name} height={100} width={100} />
      <p>{coinData.coin.price}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  const coinIds = data.data.coins.map((coin) => ({
    params: { id: coin.id.toString() },
  }));

  return {
    paths: coinIds,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await Axios.get(
    `https://api.coinstats.app/public/v1/coins/${params.id}`
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default Coin;