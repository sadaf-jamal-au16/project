const li = document.getElementsByTagName("li")
let countryget = document.getElementsByClassName('countryget')
let countrypost = document.getElementsByClassName('countrypost')
let countryput = document.getElementsByClassName('countryput')
let countrydelete = document.getElementsByClassName('countrydelete')

function removegetcountry() {
    countryget[0].classList.add('hidden')
    countryget[0].children[1].value = null
    countryget[0].children[2].value = null
}

function removeputcountry() {
    countryput[0].classList.add('hidden')
    countryput[1].classList.add('hidden')
    countryput[0].children[1].value = null
    countryput[1].children[1].value = null
}

function removepostcountry() {
    countrypost[0].classList.add('hidden')
    countrypost[0].children[1].value = null
}

function removedeletecountry() {
    countrydelete[0].classList.add('hidden')
    countrydelete[0].children[1].value = null
}

function getcountry() {
    countryget[0].classList.remove('hidden')
    countryget[0].children[2].value = "true"
    removepostcountry()
    removeputcountry()
    removedeletecountry()
}

function putcountry() {
    removegetcountry()
    removepostcountry()
    countryput[0].classList.remove('hidden')
    countryput[1].classList.remove('hidden')
    removedeletecountry()
}

function postcountry() {
    removegetcountry()
    countrypost[0].classList.remove('hidden')
    removeputcountry()
    removedeletecountry()
}
function deletecountry() {
    removegetcountry()
    removepostcountry()
    removeputcountry()
    countrydelete[0].classList.remove('hidden')
}

li[0].addEventListener('click', getcountry)
li[1].addEventListener('click', putcountry)
li[2].addEventListener('click', postcountry)
li[3].addEventListener('click', deletecountry)


let cityget = document.getElementsByClassName('cityget')
let citypost = document.getElementsByClassName('citypost')
let cityput = document.getElementsByClassName('cityput')
let citydelete = document.getElementsByClassName('citydelete')

function removegetcity() {
    cityget[0].classList.add('hidden')
    cityget[0].children[1].value = null
    cityget[0].children[2].value = null
}

function removeputcity() {
    cityput[0].classList.add('hidden')
    cityput[1].classList.add('hidden')
    cityput[2].classList.add('hidden')
    cityput[0].children[1].value = null
    cityput[1].children[1].value = null
    cityput[2].children[1].value = null
}

function removepostcity() {
    citypost[0].classList.add('hidden')
    citypost[0].children[1].value = null
    citypost[1].classList.add('hidden')
    citypost[1].children[1].value = null
}

function removedeletecity() {
    citydelete[0].classList.add('hidden')
    citydelete[0].children[1].value = null
}

function getcity() {
    cityget[0].classList.remove('hidden')
    cityget[0].children[2].value = 'true'
    removepostcity()
    removeputcity()
    removedeletecity()
}

function putcity() {
    removegetcity()
    removepostcity()
    cityput[0].classList.remove('hidden')
    cityput[1].classList.remove('hidden')
    cityput[2].classList.remove('hidden')
    removedeletecity()
}

function postcity() {
    removegetcity()
    citypost[0].classList.remove('hidden')
    citypost[1].classList.remove('hidden')
    removeputcity()
    removedeletecity()
}
function deletecity() {
    removegetcity()
    removepostcity()
    removeputcity()
    citydelete[0].classList.remove('hidden')
}

li[4].addEventListener('click', getcity)
li[5].addEventListener('click', putcity)
li[6].addEventListener('click', postcity)
li[7].addEventListener('click', deletecity)