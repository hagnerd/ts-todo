import * as React from 'react';

interface Props {
  id: string;
  title: string;
  completed: boolean;
  toggleComplete(id: string): void;
}

const Todo: React.FunctionComponent<Props> = ({
  id,
  title,
  completed,
  toggleComplete,
}) => (
  <div>
    <h3 style={{ color: completed ? 'lightgreen' : 'lightpink' }}>{title}</h3>
    <button onClick={() => toggleComplete(id)}>
      {!completed ? 'Finish Task' : 'Mark Unfinished'}
    </button>
  </div>
);

export default Todo;
