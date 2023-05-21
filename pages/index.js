import Card from "@/components/Card";

const endpoint = 'https://api.coinstats.app/public/v1/coins';
const fiat = 'USD';
const numberOfItems = '20';

const Home = ({ coins }) => {
  return (
    <div className="container">
      <Card coins={coins}/>
    </div>
  )
}
export default Home;

export const getServerSideProps = async () => {
  const response = await fetch(`${endpoint}?skip=0&limit=${numberOfItems}&currency=${fiat}`)
  const data = await response.json() 

  return {
    props: {
      coins: data.coins,
    },
  }
}