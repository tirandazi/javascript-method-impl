class UserDefinedArray extends Array {
  customMap(callback) {
    const arrayItems = this.values();
    const result = new Array();
    for (const item of arrayItems) {
      result.push(callback(item));
    }
    return result;
  }
  customFilter(callback) {}
  customReduce(callback) {}
  customForEach(callback) {}
}

export default UserDefinedArray;
