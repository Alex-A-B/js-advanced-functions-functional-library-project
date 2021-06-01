const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = collection;
        if (collection instanceof Array) {
            newCollection = collection.slice()
        } else {
            newCollection = Object.values(collection)
        }

        newCollection.forEach(ele => callback(ele))

      return collection
    },

    map: function(collection, callback) {
        if (!(collection instanceof Array)) 
          collection = Object.values(collection)
        

        const newArr = []

        collection.forEach(ele => newArr.push(callback(ele)))
        
        return newArr

    },

    reduce: function(collection, callback, acc) {
      if (!(collection instanceof Array)) 
        collection = Object.values(collection)
       
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }

      collection.forEach(ele => acc = callback(acc, ele, collection))

      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) 
        collection = Object.values(collection)
      

      for (let ele of collection) 
        if (predicate(ele))
            return ele
      
      
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) 
        collection = Object.values(collection)
      
      let newArr = []

      for (let ele of collection)
        if (predicate(ele)) 
          newArr.push(ele)
        
      
        return newArr
    },

    size: function(collection) {
      if (!(collection instanceof Array)) 
        collection = Object.values(collection)

        return collection.length
    },

    first: function(array, n=1) {
      if (n === 1) {
      return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n=1) {
      if (n === 1) {
        return array[array.length-1]
      } else {
        return array.slice(array.length-n, array.length)
      }
    },

    compact: function(array) {
      return fi.filter(array, (ele) => !!ele)

    },

    sortBy: function(array, callback) {
        const newArr = [...array];
        return newArr.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow=false) {
      const flatArray = []
      fi.each(array, (ele) => {
        if (shallow) {
            if (Array.isArray(ele)) {
              ele.forEach(item => flatArray.push(item))
                } else { 
                  flatArray.push(ele)
                }
        }
        else {
            if (Array.isArray(ele)) {
              flatArray.push(...fi.flatten(ele))
                } else {
                  flatArray.push(ele) 
                }
        }
      })
      return flatArray;
    },

    fastUniq: function(array, callback) {
      const uniqArray = [array[0]]
      let lastVal = array[0]
      array.forEach(ele => {if(ele !== lastVal) {
          uniqArray.push(ele)
          lastVal = ele
        }
      })
      return uniqArray;
    },

    uniq: function(array, sorted=false, callback=false) {
      const uniqArray = []
      
      let compare = (ele1, ele2) => ele1 === ele2

      if (callback) {
        compare = (ele1, ele2) => callback(ele1) === callback(ele2)
      }

      if (sorted) {
        return fi.fastUniq(array)
      } else {
        for (let ele of array) {
          const notUnique = false;
          for (let item of uniqArray) {
            
            if (compare(ele,item)) {
              notUnique =  true
              break
            }
          }
          if (!notUnique) {
            uniqArray.push(ele)
          }
        }
      }
      return uniqArray
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj) {
        keys.push(key)
      } 
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
