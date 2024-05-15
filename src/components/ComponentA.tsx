import { useEffect } from 'react';

import { fetchSampleDataAction } from '../store/apiActions/getActions/fetchSampleDataAction';
import { useAppDispatch, useAppSelector } from '../store/AppStore';

import { useModifiers } from './hooks/useModifiers';

import styles from './sample.module.css';

export const ComponentA = () => {
  const dispatch = useAppDispatch();
  const appName = useAppSelector(({ sample }) => sample.appName);
  const playersCount = useAppSelector(({ sample }) => sample.playersCount);
  const posts = useAppSelector(({ sample }) => sample.posts);
  useEffect(() => {
    dispatch(fetchSampleDataAction());
  }, [dispatch]);
  const mods = useModifiers(
    styles,
    'players_info',
    {
      more: playersCount > 100,
      less: playersCount <= 100,
    },
    { isWithBaseClass: true }
  );
  return (
    <div>
      <h1>{appName}</h1>
      <h3 className={mods}>Players Count: {playersCount}</h3>
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
