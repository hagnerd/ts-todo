/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, css, Global } from '@emotion/core';
import shortid from 'shortid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface AppState {
  todos: Array<Task>;
  selectedView: View;
}

enum View {
  All,
  Archived,
  Unfinished,
}

const todoViewReducer = (action: View, todos: Array<Task>): Array<Task> => {
  switch (true) {
    case action === View.Archived:
      return todos.filter(todo => todo.completed === true);
    case action === View.Unfinished:
      return todos.filter(todo => todo.completed === false);
    default:
      return todos;
  }
};

const appStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '90vh',
});

const headerStyles = css({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
});

const mainStyles = css({
  marginBottom: 'auto',
});

class App extends React.Component<{}, AppState> {
  readonly state: AppState = { todos: [], selectedView: View.Unfinished };

  addTodo = (title: string) => {
    this.setState(({ todos }) => ({
      todos: [...todos, { id: shortid.generate(), completed: false, title }],
    }));
  };
  toggleTodo = (id: string) => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  selectView = (view: View) => {
    this.setState({ selectedView: view });
  };

  render() {
    const todosLeft = this.state.todos.filter(todo => todo.completed === false)
      .length;
    const todosCompleted = this.state.todos.length - todosLeft;
    const todos = todoViewReducer(this.state.selectedView, this.state.todos);

    return (
      <>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
            }
            body,
            html {
              overflow: hidden;
              margin: 0;
              padding: 0;
            }
          `}
        />
        <div css={appStyles}>
          <header css={headerStyles}>
            <TodoInput onSubmit={this.addTodo} />
          </header>
          <main css={mainStyles}>
            <TodoList todos={todos} toggleComplete={this.toggleTodo} />
          </main>
          <div>
            <h3 style={{ textAlign: 'center' }}>Change Views</h3>
            <button onClick={() => this.selectView(View.All)}>All</button>
            <button onClick={() => this.selectView(View.Archived)}>
              Archived
            </button>
            <button onClick={() => this.selectView(View.Unfinished)}>
              Unfinished
            </button>
          </div>
          <Footer
            completedCount={todosCompleted}
            uncompletedCount={todosLeft}
          />
        </div>
      </>
    );
  }
}

export default App;
