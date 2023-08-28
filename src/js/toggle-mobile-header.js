const toggleMobileHeader = () =>{
  const button = document.querySelector(".header__mobile-button")
  const mobileHeader = document.querySelector(".main-nav")
  button.addEventListener("click",()=>{
    button.classList.toggle("active")
    mobileHeader.classList.toggle("active")
  })
}

export default toggleMobileHeader;