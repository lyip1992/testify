var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function(){
  describe('the todo object', function(){

    it('should be an object', function(){
      expect(todo).to.be.a('object');
    });

    it('should have all the necessary methods', function(){
      expect(todo.util).to.have.property('trimTodoName');
      expect(todo.util).to.have.property('isValidTodoName');
      expect(todo.util).to.have.property('getUniqueId');
    });
  });
});

describe('the todo.util methods', function() {
});
