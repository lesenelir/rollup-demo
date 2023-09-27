import {login} from './login.js'
import {message} from './message.js'

import json from '../data/data.json' assert { type: 'json' }

login('hello')
message()

login(json.name)
login(json.author)

