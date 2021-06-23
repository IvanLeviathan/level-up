import {React} from 'react';
import TaskContainer from '../../container/taskContainer';
import CategoryContainer from '../../container/categoryContainer';
import { useRouteMatch } from 'react-router-dom';
import {Context} from '../../contextContext/index';

export const Profile = () => {
  const match = useRouteMatch('/todos/:id');
  const todoID = !!match && match.params.id ? +match.params.id : 0;
  return (
    <Context.Provider value={{
      todoID
    }}>
    <div className="container">
      <div className="row">
        <div className={!!match ? 'col-6' : 'col-12'}>
          <TaskContainer/>
        </div>
        {!!match ? (
          <div className="col-6">
            <CategoryContainer/>
          </div>
        ) : (
          null
        )}
        
      </div>
    </div>
    </Context.Provider>
  )
};