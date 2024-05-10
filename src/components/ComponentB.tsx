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
  return (
    <div>
      <button onClick={incPlayersCount}>Increase Players Count</button>
      <button onClick={changeAppName}>AppName</button>
    </div>
  );
};
