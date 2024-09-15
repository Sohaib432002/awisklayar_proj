window.addEventListener('wheel', function (event) {
    var section0 = document.getElementById('section0')
    var headeing = document.getElementById('')
    var qurysection0 = document.querySelector('#section0')
    if (event.deltaY > 0) {
        qurysection0.style.transition = '0.2s ease-in-out'
        qurysection0.style.opacity = '1'
    }
    else if (event.deltaY > 0) {
        section0.style.opacity = '1'
        console.log('scrolling_up')
    }
})
window.addEventListener('scroll', () => {
    var section0 = document.getElementById('section0');
    const scroll = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const heading = document.getElementById('heading1');
    const img0_1 = document.getElementById('img0_1');
    const txt = document.getElementById('text'); // Correct method
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const images2 = document.getElementById('images2_1');
    const images2_2 = document.getElementById('images2_2');
    const images2_3 = document.getElementById('images2_3');
    const images2_4 = document.getElementById('images2_4');
    const headeing2 = document.getElementById('heading2');
    const txt2 = document.getElementById('text2_1');
    const pt1 = document.getElementById('point_1')
    const pt2 = document.getElementById('point_2')
    const pt3 = document.getElementById('point_3')
    const pt4 = document.getElementById('point_4')
    const pt5 = document.getElementById('point_5')
    const txt2_2 = document.getElementById('text2_2');
    const txt4 = document.getElementById('txt4');
    const head4 = document.getElementById('heading4');
    const btns = document.getElementById('btns');
    const heading5 = document.getElementById('heading5');
    const images5 = document.getElementById('images5');
    const head3 = document.getElementById('heading3');
    const images3 = document.getElementById('images3');
    images2.style.transform = 'translateX(-1000px) rotate(-100deg)'
    images2_2.style.transform = 'translateX(1000px) rotate(-100deg)'
    images2_3.style.transform = 'translateX(-1000px) rotate(-10deg)'
    images2_4.style.transform = 'translateX(1000px) rotate(-100deg)'
    console.log(scroll, scrollHeight, viewportHeight);

    section0.style.opacity = '0';
    heading.style.transform = 'translateY(1000px)';
    heading.style.transition = '0.5s ease-in-out';
    heading.style.opacity = '0';
    img0_1.style.opacity = '0';
    img0_1.style.transition = '0.5s ease-in-out';
    img0_1.style.transform = 'translateY(100px)';
    if (scroll >= 0 && scroll < 10) {

        section0.style.opacity = '1';
        heading.style.transform = 'translateY(0px)';
        heading.style.transition = '0.5s ease-in-out';
        heading.style.opacity = '1';
        img0_1.style.opacity = '1';
        img0_1.style.transition = '0.5s ease-in-out';
        img0_1.style.transform = 'translateY(0px)';

    } else if (scroll > 10 && scroll < 800) {
        section0.style.opacity = '1';
        img0_1.style.opacity = '1';
        img0_1.style.transition = '0.5s ease-in-out';
        img0_1.style.transform = 'translateY(0px)';
        heading.style.transform = 'translateY(0px)';
        heading.style.transition = '0.5s ease-in-out';
        heading.style.opacity = '1';
        img1.style.opacity = '0';
        headeing2.style.opacity = '1';
        img1.style.opacity = '0';
        img2.style.opacity = '0';
        img3.style.opacity = '0';
        txt.style.opacity = '0';
        txt.style.transition = '0.5s ease-in-out'; // Ensure transition is applied
        txt.style.transform = 'rotate(20deg) translateX(100px)'; // Adjus
        headeing2.style.transform = 'translateX(0px) rotate(0deg)';
        img1.style.transition = '0.5s ease-in-out';
        img2.style.transition = '0.5s ease-in-out';
        img3.style.transition = '0.5s ease-in-out';
        img1.style.transform = 'rotate(0deg)';
        img2.style.transform = 'rotate(0deg)';
        img3.style.transform = 'rotate(0deg)';

    } else if (scroll > 800 && scroll < 1600) {
        section0.style.opacity = '0';
        heading.style.transform = 'translateY(0px)';
        txt.style.opacity = '1';
        txt.style.transition = '0.2s ease-in-out'; // Ensure transition is applied
        txt.style.transform = 'rotate(0deg)'; // Adjus
        img2.style.opacity = '1';
        img3.style.opacity = '1';

        section0.style.opacity = '0';
        img0_1.style.opacity = '0';
        img0_1.style.transition = '0.5s ease-in-out';
        img0_1.style.transform = 'translateY(600px)';

        img1.style.opacity = '1';
        headeing2.style.opacity = '0';
        headeing2.style.transform = 'translateX(-1000px) rotate(0deg)';
        img1.style.transition = '0.5s ease-in-out';
        img2.style.transition = '0.5s ease-in-out';
        img3.style.transition = '0.5s ease-in-out';
        img1.style.transform = 'rotate(20deg)';
        img2.style.transform = 'rotate(20deg)';
        img3.style.transform = 'rotate(20deg)';
        img1.style.width = '400px'
    } else if (scroll > 1601 && scroll < 1800) {
        txt.style.transition = '0.5s ease-in-out';
        txt.style.transform = 'translateY(-1000px)';
        img2.style.opacity = '0';
        img3.style.opacity = '0';
        img1.style.opacity = '0';
        img1.style.transition = '0.5s ease-in-out';
        img2.style.transition = '0.5s ease-in-out';
        img3.style.transition = '0.5s ease-in-out';
        img1.style.transform = 'rotate(0deg)';
        img2.style.transform = 'rotate(0deg)';
        headeing2.style.transition = '0.5s ease-in-out';
        headeing2.style.opacity = '1';
        headeing2.style.transform = 'translateX(0px) rotate(0deg)';
        images2.style.transform = "translateY(-1000)"
        img3.style.transform = 'rotate(0deg)';
        images2.style.opacity = '0';
        images2_2.style.opacity = '0';
        images2_3.style.opacity = '0';
        images2_4.style.opacity = '0';


    } else if (scroll > 1801 && scroll < 2400) {

        images2.style.transition = '0.8s ease-in-out'
        images2_2.style.transition = '0.8s ease-in-out'
        images2_3.style.transition = '0.8s ease-in-out'
        images2_4.style.transition = '0.8s ease-in-out'
        images2.style.transform = 'translateY(0px)'
        images2_2.style.transform = 'translateX(0px) rotate(0deg)'
        images2_3.style.transform = 'translateX(-1000px) rotate(-100deg) '
        images2_4.style.transform = 'translateX(1000px) rotate(100deg)'
        images2.style.opacity = '1';
        images2_2.style.opacity = '1';
        images2_3.style.opacity = '0';
        images2_4.style.opacity = '0';

    } else if (scroll > 2401 && scroll < 2827) {
        images2.style.opacity = '1';
        images2_2.style.opacity = '1';
        images2_3.style.opacity = '1';
        images2_4.style.opacity = '1';
        images2_3.style.transform = 'translateX(0px) rotate(0deg)'
        images2_4.style.transform = 'translateX(0px)  rotate(0deg)'
        txt2.style.transition = '0.5s ease-in-out';
        txt2.style.opacity = '0';
        txt2.style.transform = 'translateY(100px)'

    } else if (scroll > 2828 && scroll < 3391) {
        txt2.style.transition = '0.5s ease-in-out';
        images2_3.style.opacity = '1';
        images2_4.style.opacity = '1';
        txt2.style.transform = 'translateY(0px)'
        txt2.style.opacity = '1';
        txt2_2.style.transition = '0.5s ease-in-out';
        txt2_2.style.transform = 'translateY(100px)'
        txt2_2.style.opacity = '0';
    } else if (scroll > 3392 && scroll < 3800) {
        txt2.style.transform = 'translateY(-100px)'
        txt2.style.opacity = '0';
        heading5.style.opacity = '0';
        heading5.style.transition = '0.5s ease-in-out';
        heading5.style.transform = 'translateX(-1000px)'
        txt2_2.style.transition = '0.5s ease-in-out';
        txt2_2.style.transform = 'translateY(0px)'
        txt2_2.style.opacity = '1';
        pt1.style.opacity = '0';
        pt1.style.transition = '0.5s ease-in-out';
        pt2.style.transition = '0.5s ease-in-out';
        pt1.style.transform = 'translateX(-100px)';
        pt2.style.transform = 'translateX(-100px)';
        pt2.style.opacity = '0';
        pt3.style.opacity = '0';
        pt4.style.opacity = '0';
        pt5.style.opacity = '0';
    } else if (scroll > 3801 && scroll < 4000) {
        txt2_2.style.transform = 'translateY(-100px)'
        txt2_2.style.opacity = '0';
        heading5.style.opacity = '1';
        heading5.style.transition = '0.5s ease-in-out';
        heading5.style.transform = 'translateX(0px)'
        images5.style.opacity = '0';
        images5.style.transition = '0.5s ease-in-out';
        images5.style.transform = 'translateX(1000px)'

    } else if (scroll > 4001 && scroll < 4700) {
        images5.style.opacity = '1';
        images5.style.transition = '0.5s ease-in-out';
        images5.style.transform = 'translateX(0px)'
        pt1.style.opacity = '0';
        pt1.style.transition = '0.5s ease-in-out';
        pt2.style.transition = '0.5s ease-in-out';
        pt1.style.transform = 'translateX(-100px)';
        pt2.style.transform = 'translateX(-100px)';
        pt2.style.opacity = '0';
        pt3.style.opacity = '0';
        pt4.style.opacity = '0';
        pt5.style.opacity = '0';
        pt3.style.transition = '0.5s ease-in-out';
        pt4.style.transition = '0.5s ease-in-out';
        pt5.style.transition = '0.5s ease-in-out';
        pt3.style.transform = 'translateX(-100px)'
        pt4.style.transform = 'translateX(-100px)'
        pt5.style.transform = 'translateX(-100px)'
        head3.style.opacity = '0';
        head3.style.transition = '0.5s ease-in-out';
        head3.style.transform = 'translateX(1000px)'
    } else if (scroll > 4701 && scroll < 4800) {
        head3.style.opacity = '1';
        head3.style.transition = '0.5s ease-in-out';
        head3.style.transform = 'translateX(0px)'
        pt1.style.opacity = '0';
        pt1.style.transition = '0.5s ease-in-out';
        pt2.style.transition = '0.5s ease-in-out';
        pt1.style.transform = 'translateX(-100px)';
        pt2.style.transform = 'translateX(-100px)';
        pt2.style.opacity = '0';
        pt3.style.opacity = '0';
        pt4.style.opacity = '0';
        pt5.style.opacity = '0';
        pt3.style.transition = '0.5s ease-in-out';
        pt4.style.transition = '0.5s ease-in-out';
        pt5.style.transition = '0.5s ease-in-out';
        pt3.style.transform = 'translateX(-100px)'
        pt4.style.transform = 'translateX(-100px)'
        pt5.style.transform = 'translateX(-100px)'
    }



    else if (scroll > 4801 && scroll < 5099) {
        txt2_2.style.transform = 'translateY(-100px)'
        txt2_2.style.opacity = '0';
        pt1.style.transform = 'translateX(100px)';
        pt2.style.transform = 'translateX(100px)';
        pt1.style.opacity = '1';
        pt2.style.opacity = '0';
        pt3.style.opacity = '0';
        pt4.style.opacity = '0';
        pt5.style.opacity = '0';
    } else if (scroll > 5100 && scroll < 5200) {
        pt1.style.opacity = '1';
        pt2.style.transform = 'translateX(100px)';
        pt3.style.transform = 'translateX(100px)';
        pt4.style.transform = 'translateX(100px)';
        pt3.style.transition = '0.5s ease-in-out';
        pt4.style.transition = '0.5s ease-in-out';
        pt2.style.opacity = '1';
        pt3.style.opacity = '1';
        pt4.style.opacity = '1';
        pt5.style.opacity = '1';
    } else if (scroll > 5201 && scroll < 5300) {
        pt1.style.opacity = '1';
        pt2.style.opacity = '1';
        pt3.style.transform = 'translateX(100px)';
        pt5.style.transform = 'translateX(100px)';
        pt3.style.opacity = '1';
        pt4.style.transform = 'translateX(100px)';
        pt4.style.opacity = '1';
        pt5.style.opacity = '1';
    } else if (scroll > 5301 && scroll < 5400) {
        pt4.style.opacity = '1';
        pt4.style.transform = 'translateX(100px)';
        pt5.style.opacity = '1';
        pt5.style.transform = 'translateX(100px)';
        pt5.style.transition = '0.5s ease-in-out';
    } else if (scroll > 5401 && scroll < 6000) {
        pt5.style.opacity = '1';
        pt5.style.transform = 'translateX(100px)';
        pt5.style.transition = '0.5s ease-in-out';
        pt4.style.opacity = '1';
        pt4.style.transform = 'translateX(100px)';
        pt4.style.transition = '0.5s ease-in-out';
        txt4.style.opacity = '0';
        txt4.style.transform = 'translateY(100px)'
        txt4.style.transition = '0.5s ease-in-out';
        head4.style.opacity = '0';
        head4.style.transform = 'translateY(100px)'
        head4.style.transition = '0.5s ease-in-out';
        btns.style.opacity = '0';
        btns.style.transform = 'translateY(100px)'
        btns.style.transition = '0.5s ease-in-out';


    } else if (scroll > 6001) {
        pt5.style.opacity = '1';
        pt5.style.transform = 'translateX(-100px)';
        pt5.style.transition = '0.5s ease-in-out';
        txt4.style.transform = 'translateY(0px)'
        txt4.style.opacity = '1';
        txt4.style.transition = '0.5s ease-in-out';
        pt4.style.transform = 'translateX(-100px)';
        pt4.style.opacity = '1';
        pt4.style.transition = '0.5s ease-in-out';
        head4.style.transform = 'translateY(0px)'
        head4.style.opacity = '1';
        head4.style.transition = '0.5s ease-in-out';
        btns.style.transform = 'translateY(0px)'
        btns.style.opacity = '1';
    }
});

function downloadCV() {
    // Define the URL or path to the file
    var fileUrl = '../cv/Professional Modern CV Resume (1).pdf'; 

    // Fetch the file as a Blob
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create a link element
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob); // Use Blob URL
            link.download = 'Awais.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href); // Clean up Blob URL
        })
        .catch(error => console.error('Error downloading file:', error));
}

function messageMe() {
    // Collect user input through prompts var name = prompt("What is your name?");
    var name = prompt("What is your name?");
    if (!name) {
        alert("Name is required!");
        return;
    }

    var email = prompt("What is your email?");
    if (!email) {
        alert("Email is required!");
        return;
    }

    var message = prompt("Enter your message:");
    if (!message) {
        alert("Message is required!");
        return;
    }

    // Store message in localStorage
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ name, email, message });
    localStorage.setItem('messages', JSON.stringify(messages));

    alert("Thank you for your message!");
};
(function () {
    "use strict";
    /*
     * Form Validation
     */
  
    // Fetch all the forms we want to apply custom validation styles to
    const forms = document.querySelectorAll(".needs-validation");
    const result = document.getElementById("result");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
  
            form.querySelectorAll(":invalid")[0].focus();
          } else {
            /*
             * Form Submission using fetch()
             */
  
            const formData = new FormData(form);
            event.preventDefault();
            event.stopPropagation();
            const object = {};
            formData.forEach((value, key) => {
              object[key] = value;
            });
            const json = JSON.stringify(object);
            result.innerHTML = "Please wait...";
  
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            })
              .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-green-500");
                } else {
                  console.log(response);
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-red-500");
                }
              })
              .catch((error) => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
              })
              .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                  result.style.display = "none";
                }, 5000);
              });
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  function disproj(){
    document.location.href='../html/ProJ_from.html';
  }
  
  function btn_nav(){
    var btn = document.getElementById('btn_nav');
    var nav = document.getElementById('navbar');
    
    if(nav.style.display === 'none'){

        nav.style.transition='0.8s all ease-in-out';
        nav.style.transform='translateX(0px)';
        nav.style.display = 'flex';
        btn.style.transition= '0.5s  all ease-in-out';
        btn.style.transform = 'rotate(90deg)';
        nav.style.transform = 'translateX(0px)';
    }else{
        nav.style.transition='0.8s all ease-in-out';
        nav.style.transform='translateX(-100px)';
        nav.style.display = 'none';
        btn.style.transform = 'rotate(0deg)';
    }
}