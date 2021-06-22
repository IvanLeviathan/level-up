import {React} from 'react';
import TaskContainer from '../../container/taskContainer';
import CategoryContainer from '../../container/categoryContainer';
import { useRouteMatch } from 'react-router-dom';

export const Profile = () => {
  const match = useRouteMatch('/todos/:id');
  return (
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
    
  )
};