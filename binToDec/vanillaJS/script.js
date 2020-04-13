let info = {}

const convToDec = (e) => {
  if (e.length === 0) {
    info.message = ''
    info.type = ''
    showInfo(info)
    return
  }

  if (!validBinary(e)) {
    info.message = `${e} is not a valid binary number.`
    info.type = 'error'
    showInfo(info)
    return
  }
  info.message = `The binary number ${e} is converted to decimal number ${toDecimal(e)}`
  info.type = 'info'
  showInfo(info)
}

const validBinary = (e) => {
  const reg = /[^01]/
  return (!reg.test(e)) ? true : false
}

const toDecimal = (e) => {
  let result = 0;
  for (let i = 0; i <= e.length; i++) {
    const n = e.charAt(i)
    result += n * Math.pow(2, e.length - (i + 1))
  }
  return result
}

const showInfo = (info) => {
  const infoDom = document.getElementById('info')
  infoDom.innerHTML = info.message
  infoDom.className = info.type
}
