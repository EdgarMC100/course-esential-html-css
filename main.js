const $detailsList = document.querySelectorAll('details')
$detailsList.forEach(($details) => {
    $details.querySelector('summary').addEventListener('click', expand)
})

function expand() {
  console.log('expand it ');

  $detailsList.forEach(($details) => {
    $details.removeAttribute('open')
  });
}

const $button = document.getElementById('close')
const $headerWrapper = document.getElementsByClassName('header-wrapper')[0]
$button.addEventListener('click', close)

function close() {
  $headerWrapper.classList.remove('show')
  $headerWrapper.classList.add('hide')
}

const $item = document.getElementsByName('open')[0]
$item.addEventListener('click', open)

function open() {
  $headerWrapper.classList.add('show')
}




