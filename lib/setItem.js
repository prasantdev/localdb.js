const fs = require('fs')
const setItem = (file, data, format) => {
    fs.writeFileSync(file, data,format)
}
module.exports = {setItem};