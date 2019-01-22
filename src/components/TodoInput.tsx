/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, css } from '@emotion/core';

interface State {
  newTodoTitle: string;
}
interface Props {
  onSubmit: (title: string) => void;
}

const button = css({
  height: '2rem',
  border: 'none',
  background: '#756471',
  borderRadius: '3px',
  margin: '20px 0px',
  fontSize: '1rem',
  color: '#F7E5BC',
  cursor: 'pointer',
});

export default class TodoInput extends React.Component<Props, State> {
  readonly state: State = { newTodoTitle: '' };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodoTitle: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.newTodoTitle);
    this.setState({
      newTodoTitle: '',
    });
  };

  render() {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          minWidth: '40vw',
        }}
        onSubmit={this.handleSubmit}
      >
        <label
          style={{
            color: '#43404D',
            fontFamily: 'Georgia',
            fontSize: '2rem',
            textAlign: 'center',
          }}
          htmlFor="newTodo"
        >
          Add a todo
        </label>
        <input
          id="newTodo"
          name="newTodo"
          placeholder="What do you want to get done today?"
          value={this.state.newTodoTitle}
          onChange={this.handleChange}
          style={{
            padding: '10px',
            border: 'none',
            borderBottom: '2px solid #43404D',
          }}
        />
        <button css={button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
