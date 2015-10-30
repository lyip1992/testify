describe('API integration', function(){
  var server, setupStub, JSONresponse;

  before(function(){
    JSONresponse = {
      todos: [
        { name: 'Test1', done: true },
        { name: 'Test2', done: false },
        { name: 'Test3', done: true }
      ]
    };
    setupStub = sinon.stub(todo, 'setup');
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
  });
});
