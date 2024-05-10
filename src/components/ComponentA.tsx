import { useAppSelector } from '../store/AppStore';

export const ComponentA = () => {
  const appName = useAppSelector(({ sample }) => sample.appName);
  const playersCount = useAppSelector(({ sample }) => sample.playersCount);
  return (
    <div>
      <h1>{appName}</h1>
      <h3>Players Count: {playersCount}</h3>
    </div>
  );
};
