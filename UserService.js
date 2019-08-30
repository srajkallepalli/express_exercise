var users = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          age: 21
        }, {
          id: 2,
          firstName: 'Jenny',
          lastName: 'Doe',
          age: 22
        }, {
            id: 3,
            firstName: 'Smith',
            lastName: 'Doe',
            age: 23
          }, {
            id: 4,
            firstName: 'Adam',
            lastName: 'Doe',
            age: 24
          }
]

var getAll = () => {
    return users;
}
 var getUserById = (id) => {
    return users.find(user => {
        return user.id === id
    })
 }

 var addUser = (id) => {
      users.push(id);
      return id;
 }

 var deleteUser = (id) => {
    var index = users.findIndex(user => {
        return user.id === id ;
    })
    users.splice(index, 1);
 }


module.exports = {getAll, getUserById, addUser, deleteUser};