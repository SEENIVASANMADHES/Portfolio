
let menuIcon=document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

//scroll sections

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop -100;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            //activve section animation
            sec.classList.add('show-animate');
            
        }
        //if want to use animate repeat
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon in navabr

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer =document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    
}

function sendEmail(){
    Email.send({
        Host : "s1.maildns.net",
        Username : ".Full Name",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

