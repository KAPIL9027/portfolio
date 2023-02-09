const navToggle = document.querySelector('.navbar-toggle');
const links = document.querySelectorAll('.nav__link');
navToggle.addEventListener('click',()=>
{
  document.body.classList.toggle('nav-open');
})

links.forEach(link =>
    {
        link.addEventListener('click',()=>
        {
            document.body.classList.remove('nav-open');
        })
    })