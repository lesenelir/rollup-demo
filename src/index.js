import {login} from './login.js'
import {message} from './message.js'
import answer from 'the-answer'
import moment from 'moment'

import json from '../data/data.json' assert { type: 'json' }

login('hello')
message()

login(json.name)
login(json.author)

console.log('the answer is ' + answer)
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

