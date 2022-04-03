const initialState = [{
  id: 1,
  title: 'First todo',
  text: 'Some text for todo1',
  done: false,
  created: '03/28/2022'
}, {id: 2, title: 'Second todo', text: 'Some text for todo2', done: true, created: '04/01/2022'}]


export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
