/**
 * ziplist wod
 * Created by rawrt on 2/6/2017.
 */

const testList1 = [1,2,3,4];
const testList2 = ['a', 'b', 'c', 'd'];

// assumes both lists are of same length
function zipList (list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i += 1 ) {
    result.push(list1[i],list2[i]);
  }
  return result;
}
console.log(zipList(testList1,testList2).toString());

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(testList1,testList2).toString());