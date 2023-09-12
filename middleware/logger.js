const { format } = require('date-fns')
const { v4: uuid } = require('uuid') // getting v4 when destructing and renaming it to uuid
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


const logEvents = async(message, logFileNmae) => {
      const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`
      const logItem = `${dateTime}\t${uuid()}\t${message}\n`
}