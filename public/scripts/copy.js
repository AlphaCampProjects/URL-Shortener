const copyBtn = document.querySelector('.copy-btn');
const urlText = document.querySelector('#shorten-url');
const alertText = document.querySelector('.alert-text');
copyBtn.addEventListener('click', execCopy);

function execCopy() {
  urlText.select();

  document.execCommand('copy');
  alertText.innerText = '已複製至剪貼簿';
}
