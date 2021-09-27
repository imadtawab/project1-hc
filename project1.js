const imgs = document.querySelectorAll(".lesson");
console.log(imgs)
const imgs2 = document.querySelectorAll(".lesson2");
console.log(imgs2)

// const top = document.(".lesson");
const icons = document.querySelectorAll(".icon-published_with_changes");
const arr = ["arr1", "arr2", "arr3", "arr4"];
icons.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    imgs.forEach((item) => {
      item.classList.remove("dn")
    })
    imgs2.forEach((item) => {
      item.classList.add("dn")
    })
    eo.target.parentElement.getElementsByClassName("lesson")[0].classList.add("dn")
    eo.target.parentElement.getElementsByClassName("lesson2")[0].classList.remove("dn")
    
  });
});



