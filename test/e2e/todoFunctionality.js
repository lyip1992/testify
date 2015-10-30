/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test){
  casper.start('http://localhost:3000/', function(){
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.run(function(){
    test.done();
  });
});

casper.test.begin('Adds and removes todo items', 3, function suite(test){
  casper.start('http://localhost:3000/', function(){
    this.fill('.todo-form', {
      todo: 'Item1'
    }, true);

    // Check that item was added to the list
    test.assertExists('.todo-list .todo-item', 'List item should exist after being added');
  });
});

casper.test.begin('Adds and removes multiple todo items', 3, function suite(test){

});

casper.test.begin('Marks todo items as done', 1, function suite(test){

});

casper.test.begin('Does not add empty todo items', 1, function suite(test){

});
