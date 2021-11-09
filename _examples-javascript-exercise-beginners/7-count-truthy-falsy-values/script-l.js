/* <h3>Write a function which checks and count the truthy values from an array</h3>

  Falsy values in JavaScript are:
  <ul>
    <li>false</li>
    <li>0 (zero)</li>
    <li>undefined</li>
    <li>null</li>
    <li>''</li>
    <li>NaN</li>
  </ul> */
console.log('7-count-truthy-falsy-values!')

const valueArr = [1, 0, 10, false, undefined, null, , NaN, 3, 5, true];


function isTruthyFalsy(currArr) {
    let truthyVal = 0;

    for (let value of currArr) {
        if (value) {
            truthyVal++;
        }
    } return truthyVal++;
}

console.log(isTruthyFalsy(valueArr));

