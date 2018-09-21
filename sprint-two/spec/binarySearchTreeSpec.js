describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  xit('should search and find closest value in BST', function() {
    var shuffledNums = _.shuffle(_.range(1000000));
    var shuffledTree = new BinarySearchTree(shuffledNums);
    var closestNum = shuffledTree.searchClosest(39875.2);
    expect(closestNum).to.equal(39875);
  });

  xit('should search faster than array.includes', function() {
    var shuffledNums = _.shuffle(_.range(1000000));
    var shuffledTree = new BinarySearchTree(shuffledNums);

    var start = performance.now();
    shuffledTree.searchClosest(39875);
    var stop = performance.now();

    var treeTime = stop - start;

    start = performance.now();
    shuffledNums.includes(39875);
    stop = performance.now();

    var arrayTime = stop - start;

    console.log('Arr', arrayTime, 'Tree', treeTime);
    expect(treeTime < arrayTime).to.be.true;
  });

  
});


