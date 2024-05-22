/* ======================== typing effect ======================*/
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Video Editor","Music Director","Graphic Designer","Photographer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* =================== aside =======================*/
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++)
        {
            const a = navList[i].querySelector("a")
            a.addEventListener("click", function()
            {
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.remove("back-section");
                }
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth < 1211)
                {
                    asideSectionTogglerBTn();
                }
            })
        }
        function showSection(element)
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }
        const navToggler = document.querySelector(".nav-toggler"),
                aside = document.querySelector(".aside");
                navToggler.addEventListener("click", ()=> {
                    asideSectionTogglerBTn();
                } )
                function asideSectionTogglerBTn()
                {
                    aside.classList.toggle("open");
                    navToggler.classList.toggle("open");
                    for(let i = 0; i < totalSection; i++)
                    {
                        allSection[i].classList.toggle("open")
                    }
                }
/*===================downloadcv =================== */
// function downloadPDF() {
//     // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
//     var pdfUrl = 'ResultSlipAdvancedLevel.pdf';
  
//     // Create a hidden link element
//     var link = document.createElement('a');
//     link.href = pdfUrl;
//     link.target = '_blank';
  
//     // Extract the file name from the URL
//     var fileName = pdfUrl.split('/').pop();
  
//     // Set the download attribute with the desired file name
//     link.download = fileName;
  
//     // Append the link to the body
//     document.body.appendChild(link);
  
//     // Trigger a click event to start the download
//     link.click();
  
//     // Remove the link from the DOM
//     document.body.removeChild(link);
//   }