import axios from 'axios'

const instance = axios.create({
    url:'https://pick-book.herokuapp.com/'
})


export default instance
