import * as React from 'react';
import { Transition, animated } from 'react-spring';
import { Task } from '../App';
import Todo from './Todo';

interface Props {
  todos: Array<Task>;
  toggleComplete(id: string): void;
}

const TodoList: React.FunctionComponent<Props> = ({
  todos,
  toggleComplete,
}) => (
  <ul
    style={{
      width: '40vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Transition
      native
      items={todos}
      keys={todo => todo.id}
      from={{ height: 0, opacity: 0, transform: 'translate3d(0,100px,0)' }}
      enter={{ height: 'auto', opacity: 1, transform: 'translate3d(0,0,0)' }}
      leave={[{ opacity: 0.5 }, { opacity: 0 }, { height: 0 }]}
    >
      {item => props => (
        <animated.div key={item.id} style={props}>
          <li>
            <Todo {...item} toggleComplete={toggleComplete} />
          </li>
        </animated.div>
      )}
    </Transition>
  </ul>
);

export default TodoList;
