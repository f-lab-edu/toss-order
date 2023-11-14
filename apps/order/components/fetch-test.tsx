import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { menuItemsAtom } from '../app/atoms';

const fetchData = async () => {
  const response = await fetch('/api/menu-list');
  return response.json();
};

const FetchTest = () => {
  // const { data } = useQuery('menu-list', fetchData);
  const menuItems = useRecoilValue(menuItemsAtom);
  console.log(menuItems);
  return (
    <h1>
      Data from API: {JSON.stringify(menuItems)}
      {/* {data?.map((item: any) => <div key={item.id}>{item.name}</div>)} */}
    </h1>
  );
};

export default FetchTest;
