import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('/api/menu-list');
  return response.json();
};

const FetchTest = () => {
  const { data } = useQuery('menu-list', fetchData);

  return (
    <h1>
      Data from API: {JSON.stringify(data)}
      {/* {data?.map((item: any) => <div key={item.id}>{item.name}</div>)} */}
    </h1>
  );
};

export default FetchTest;
