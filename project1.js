const imgs = document.querySelectorAll(".lesson");

const imgs2 = document.querySelectorAll(".lesson2");


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

////////////////////////////////////////////////////
/////////////////////// Star Cog ///////////////////
////////////////////////////////////////////////////
const cog = document.querySelector(".cog")
const parametre = document.querySelector(".parametre")
const shadow = document.querySelector(".shadow")

cog.addEventListener("click",(eo) => {
  parametre.classList.toggle("left0")
  shadow.classList.toggle("db")
  
  
})
shadow.addEventListener("click",(eo) => {
  parametre.classList.remove("left0")
  shadow.classList.remove("db")
})

// document.body.addEventListener("click",(eo) => {
// if (parametre.className == "parametre left0") {
//   document.body.classList.add("overHiden")
// } else{
//   document.body.classList.remove("overHiden")
// }
// })

////////////////////////////////////////////////////
/////////////////////// End Cog ////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//////////////////// Star Parameter ////////////////
////////////////////////////////////////////////////

// Main-Color
const lisMain = document.querySelectorAll(".parametre .chg-bg .bg-main ul.color li")

lisMain.forEach((item) => {
  
  item.addEventListener("click",(eo) => {
    lisMain.forEach((it) => {
      it.classList.remove("active")
    })
    eo.target.classList.add("active")
    document.documentElement.style.setProperty("--main-color",eo.target.dataset.color)
  })
  
})
// header & footer
const lishf = document.querySelectorAll(".parametre .chg-bg .bg-socondaire ul.color li")

lishf.forEach((item) => {
  
  item.addEventListener("click",(eo) => {
    lishf.forEach((it) => {
      it.classList.remove("active")
    })
    eo.target.classList.add("active")
    document.documentElement.style.setProperty("--bghf-color",eo.target.dataset.color)
  })
  
})
// font-family
const listFamily = document.querySelectorAll(".parametre .chg-bg .styleBg ul.ft-family li")


listFamily.forEach((item) => {

  item.addEventListener("click",(eo) => {

    listFamily.forEach((it) => {
      it.classList.remove("active")
    })
    eo.target.classList.add("active")
    document.documentElement.style.setProperty("--fontFamily",eo.target.dataset.ftfamily)

  })
  
})

// font-style
const listStyle = document.querySelectorAll(".parametre .chg-bg .styleBg ul.ft-style li")


listStyle.forEach((item) => {

  item.addEventListener("click",(eo) => {

    listStyle.forEach((it) => {
      it.classList.remove("active")
    })
    eo.target.classList.add("active")
    document.documentElement.style.setProperty("--fontStyle",eo.target.dataset.ftstyle)

 })
  
})
// font-size-Number
const parBtnSize = document.querySelector(".parametre .chg-bg .styleBg ul.ft-size")
const sizeRight = document.querySelector(".parametre .chg-bg .styleBg ul.ft-size .right")
const sizeLeft = document.querySelector(".parametre .chg-bg .styleBg ul.ft-size .left")
const inpSize = document.querySelector(".parametre .chg-bg .styleBg ul.ft-size div")

let numberSize = 20


 let  ftSize

parBtnSize.addEventListener("click",(eo) => {
  
  if (eo.target.className == "right active") {
    sizeLeft.removeAttribute("disabled")
    inpSize.querySelector("span").classList.add("origine-right")
    numberSize++
    if (numberSize > 34) {
      eo.target.setAttribute("disabled" ,"")
    }
  } else if (eo.target.className == "left active") {
    sizeRight.removeAttribute("disabled")
    inpSize.querySelector("span").classList.add("origine-left")
    numberSize--
    if (20 > numberSize) {
      eo.target.setAttribute("disabled" ,"")
    }
  }
  // inpSize.firstChild.remove()
  console.log(numberSize)
  
  // const divSize = document.createElement("div")
  inpSize.querySelector("span").innerText = `${numberSize}px`
  eo.target.setAttribute("disabled" ,"")
  setTimeout((e) => {
    inpSize.querySelector("span").classList.remove("origine-right")
    inpSize.querySelector("span").classList.remove("origine-left")
    eo.target.removeAttribute("disabled")
    if (numberSize > 34 || 20 > numberSize) {
      eo.target.setAttribute("disabled" ,"")
    }
  } ,500)
  
})

// font-size
const btnSize = document.querySelectorAll(".parametre .chg-bg .styleBg ul.ft-size button")
const h2 = document.querySelectorAll(".main-title")


btnSize.forEach((item) => {
   
  item.addEventListener("click",(eo) => {

  //   btnSize.forEach((it) => {
  //     it.classList.remove("active")
  //   })
  //   eo.target.classList.add("active")
  ftSize = `${numberSize + 1}px`
  console.log(`this-is-${numberSize + 1}`);
     document.documentElement.style.setProperty("--f-size",ftSize)

   })
  
})

// change border zone


// const zoneBorder = document.querySelector(".parametre .chg-bg .styleBg ul.zoneBorder")



// const zone = document.querySelectorAll(".zone")
// const borderColor = ["red" ,"yellow" ,"blue" ,"black"]

// function changeBorderColor(eo) {
//   let i = 0
//   setInterval(() => {
//     zone.forEach((item) => {
//       // console.log("border");
//       item.style.backgroundColor = `${borderColor[i]}`
//       console.log(i)
//     })
//     if (i > borderColor.length - 2) {
//       i = -1
//     }
//     i++
//   }, 5000);

// }

// const zoneBorder = document.querySelectorAll(".parametre .chg-bg .styleBg ul.zoneBorder li")


// zoneBorder.forEach((item) => {

//   item.addEventListener("click",(eo) => {
//     // item.classList.remove("active")
//     if (eo.target.className == "borderYes active") {
//       // eo.target.classList.add("active")
//       console.log("object");
//       changeBorderColor()
//     // } else {
      
//     }
//     zoneBorder.forEach((it) => {
//       it.classList.add("active")
//     })
//     eo.target.classList.remove("active")
 
//   })
// })
   
  

  

  



////////////////////////////////////////////////////
//////////////////// End Parameter ////////////////
////////////////////////////////////////////////////