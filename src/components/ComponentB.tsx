import { SessionStorage } from '../storage';
import { fetchSampleDataSyncAction } from '../store/apiActions/postActions/fetchSampleDataSyncAction';
import { useAppDispatch } from '../store/AppStore';
import { sampleActions } from '../store/slices/sample';

export const ComponentB = () => {
  const dispatch = useAppDispatch();
  const changeAppName = () => {
    const newAppName = 'APP NAME -- ' + Math.floor(Math.random() * 100);
    dispatch(sampleActions.setAppName(newAppName));
  };
  const incPlayersCount = () => {
    dispatch(sampleActions.setPlayersCount(Math.floor(Math.random() * 1000)));
  };
  const postApi = async () => {
    dispatch(
      fetchSampleDataSyncAction({
        title: 'foo',
        body: 'Lokesh Bandi Webpack',
        userId: 1009,
        id: 201,
      })
    );
  };
  const setStorageItem = (key: string) => {
    switch (key) {
      case 'set':
        SessionStorage.setItem('name', 'This man is doing with self intrest');
        break;
      case 'get':
        const value = SessionStorage.getItem('name');
        console.log(value);
        break;
      case 'remove':
        SessionStorage.removeItem('name');
        break;
    }
  };
  return (
    <div>
      <button onClick={incPlayersCount}>Increase Players Count</button>
      <button onClick={changeAppName}>AppName</button>
      <button onClick={postApi}>Fetch Again to check cache</button>
      <button onClick={() => setStorageItem('set')}>set storage Item</button>
      <button onClick={() => setStorageItem('get')}>get storage Item</button>
      <button onClick={() => setStorageItem('remove')}>
        remove storage Item
      </button>
    </div>
  );
};
