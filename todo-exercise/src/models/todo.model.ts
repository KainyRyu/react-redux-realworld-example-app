import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: false,
  })
  desc: string;

  @property({
    type: 'boolean',
    required: false,
  })
  isComplete: boolean;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

@model({
  settings: {
    foreignKeys: {
      fk_todoListImage_todoListId: {
        name: 'fk_todoListImage_todoListId',
        entity: 'TodoList',
        entityKey: 'id',
        foreignKey: 'todoListId',
      },
    },
  },
})
export class TodoListImage extends Entity {
  //etc.
}


export interface TodoRelations {
  todoList?: TodoListWithRelations;
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
