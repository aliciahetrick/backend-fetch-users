// selects element where users data will be placed
const usersTable = document.querySelector('.users-table')

// removes current table child elements and fetchesUsers
function removeChidlrenAndFetchUsers() {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }
  removeAllChildNodes(usersTable)
  fetchUsers()
}

// GET - fetches all users
async function fetchUsers() {
  const response = await fetch('http://localhost:3000/users/')
  const json = await response.json()
  // console.log(json)

  // creating the table
  for (let i = 0; i < json.length; i++) {
    const td0 = document.createElement('td')
    td0.append(json[i].id)

    const td1 = document.createElement('td')
    td1.append(json[i].name)

    const td2 = document.createElement('td')
    td2.append(json[i].email)

    const tableButton = document.createElement('button')
    tableButton.textContent = 'x'

    const tr = document.createElement('tr')
    tr.appendChild(td0)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(tableButton)

    usersTable.append(tr)

    // DELETE
    tableButton.addEventListener('click', async function () {
      const response = await fetch(`http://localhost:3000/users/${json[i].id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usersTable),
      })
      removeChidlrenAndFetchUsers()
    })
  }

  // TODO:
  // can add classList to last child in table then append new row to the table
  // instead of removing all children, more efficent

  // const lastChild = document.querySelector('.users-table').lastChild
  // console.log(lastChild)
  // lastChild.classList.add('lastTableEntry')
  // lastChild.style.color = 'red'
}

fetchUsers()

// POST - adds a user
function addUser() {
  //select and add a button click to "create a user button"
  const createButton = document.querySelector('.create-user-button')
  createButton.addEventListener('click', async function () {
    let name = document.querySelector('.create-name')
    let email = document.querySelector('.create-email')
    let newUser = {
      name: name.value,
      email: email.value,
    }

    const response = await fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })

    // removes all child elements created in fetchUser
    removeChidlrenAndFetchUsers()
  })
}

addUser()

// TODO:
// PUT - update
