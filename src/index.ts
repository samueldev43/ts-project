import axios from 'axios'

const tableHead = document.querySelector('.tHead') as HTMLElement
const tableBody = document.querySelector('.tBody') as HTMLElement

const arr: Array<string> = ["Name", "Username", "Email"]

const tr = document.createElement('tr')
arr.forEach(data => {
    const th = document.createElement('th')
    th.innerHTML = data

    tr.appendChild(th)
    tableHead.appendChild(tr)
})

const url = 'https://jsonplaceholder.typicode.com/users'

interface Data {
    name: string,
    username: string,
    email:string
}

const getU = () => {
   return  axios.get<Array<Data>>(url).then(response => response.data)
}

getU().then(data => data.forEach(d => {
    const trBody = document.createElement('tr')
    const td = document.createElement('td')
    const tdUsername = document.createElement('td')
    const tdEmail = document.createElement('td')

    td.textContent = d.name
    tdUsername.textContent = d.username
    tdEmail.textContent = d.email
    
    trBody.appendChild(td)
    trBody.appendChild(tdUsername)
    trBody.appendChild(tdEmail)

    tableBody.appendChild(trBody)
}))