describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(undefined);
  });

  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  it('should not decrease size when same key is repeatedly removed', function() {
    hashTable.insert('Joe', 'Perry');
    hashTable.remove('Joe');
    hashTable.remove('Joe');
    hashTable.remove('Joe');
    expect(hashTable.getSize()).to.equal(0);
  });

  it('should not increase size when a new value is added at the same key', function() {
    hashTable.insert('Joe', 'Perry');
    hashTable.insert('Joe', 'Ralph');
    hashTable.insert('Joe', 'Danny');
    expect(hashTable.getSize()).to.equal(1);
  });

  // (Advanced! Remove the extra "x" when you want the following tests to run)
  it ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  it ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });
  it('should return correct value after removing the first of two keys that collide', function() {
    hashTable.insert('bat', 5);
    hashTable.insert('ct', 6);
    hashTable.remove('bat');
    expect(hashTable.retrieve('ct')).to.equal(6);
  });
  it('should not duplicate values that were added already after collision is resolved', function() {
    hashTable.insert('bat', 5);
    hashTable.insert('ct', 6);
    hashTable.insert('John', 'Coltrane');
    hashTable.insert('Wayne', 'Shorter');
    hashTable.remove('bat');
    hashTable.insert('ct', 6);
    expect(hashTable.getSize()).to.equal(3);
  });
});
