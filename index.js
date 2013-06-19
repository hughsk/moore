module.exports = moore

function moore(range, dims) {
  dims = dims || 2
  range = range || 1
  return recurse([], [], 0)

  function recurse(array, temp, d) {
    if (d === dims-1) {
      for (var i = -range; i <= range; i += 1) {
        if (i || temp.some(function(n) {
          return n
        })) array.push(temp.concat(i))
      }
    } else {
      for (var i = -range; i <= range; i += 1) {
        recurse(array, temp.concat(i), d+1)
      }
    }
    return array
  }
}
