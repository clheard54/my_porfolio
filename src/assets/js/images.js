const images = document.getElementsByClassName('clickable')
const modal = document.getElementById('modal')
const inModal = document.getElementsByClassName('modal-content')[0]
const span = document.getElementsByClassName("close")[0];


for (let i=0; i<images.length; i++){
    images[i].addEventListener("click", function(e){
        let selected = document.createElement('img')
        selected.src = e.srcElement.src
        selected.style.maxWidth = '90vh';
        inModal.appendChild(selected);
        modal.style.display = "block";
    })
}
span.onclick = function() {
    inModal.lastChild.remove()
    modal.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == modal) {
      inModal.lastChild.remove()
      modal.style.display = "none";
    }
  }
  