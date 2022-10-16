import TodoList from "./TodoList.js";
$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
        ${TodoList()}
       
   </div>
`);

export default [
    {   title: 'Buy milk', status: 'CANCELED',
        done: true,
    },
    {   title: 'Pickup the kids',
        status: 'IN PROGRESS',
        done: false,
    },
    {   title: 'Walk the dog', status: 'DEFERRED',
        done: false,
    },
];
