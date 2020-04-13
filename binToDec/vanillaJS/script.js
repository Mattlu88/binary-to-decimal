const convToDec = (e) => {

  const converter = {
    bianry: e,
    decimal: '',
    info: '',
  }

  if (!validBinary(converter.bianry)) {
    converter.info = `${e} is not a valid binary number`
  } else {
    converter.decimal = toDecimal(converter.bianry)
  }
  converterView(converter)
}

const validBinary = (e) => {
  const reg = /[^01]/
  return (!reg.test(e)) ? true : false
}

const toDecimal = (e) => {
  if (e.length === 0) {
    return ''
  }

  let result = 0;
  for (let i = 0; i <= e.length; i++) {
    const n = e.charAt(i)
    result += n * Math.pow(2, e.length - (i + 1))
  }
  return result
}

const converterView = (converter) => {
  const decimalDom = document.getElementById('decimal')
  decimalDom.value = converter.decimal

  const infoDom = document.getElementById('info')
  infoDom.innerHTML = converter.info
}
