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

        for (let cb = 0; cb < newCollection.length; cb++)
            callback(newCollection[cb])

      return collection
    },

    map: function(collection, callback) {

    },

    reduce: function(collection, callback, acc) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
