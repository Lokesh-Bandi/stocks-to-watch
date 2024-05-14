import { useEffect } from 'react';

import { fetchSampleDataAction } from '../store/apiActions/getActions/fetchSampleDataAction';
import { useAppDispatch, useAppSelector } from '../store/AppStore';

export const ComponentA = () => {
  const dispatch = useAppDispatch();
  const appName = useAppSelector(({ sample }) => sample.appName);
  const playersCount = useAppSelector(({ sample }) => sample.playersCount);
  const posts = useAppSelector(({ sample }) => sample.posts);
  useEffect(() => {
    dispatch(fetchSampleDataAction());
  }, [dispatch]);
  return (
    <div>
      <h1>{appName}</h1>
      <h3>Players Count: {playersCount}</h3>
      {posts ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {posts.slice(0, 5).map((post) => {
            return (
              <div
                style={{
                  maxWidth: '30%',
                }}
                key={post.id}
              >
                <h3>{post.title}</h3>
                <div>{post.body}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
