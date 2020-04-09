const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src2": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "img-src3": "img/mid-page-accent.jpg"
  },
  "bottom-content": {
    "services-h4" : "Services",
    "services-content" : "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4" : "Product",
    "product-content" : "elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4" : "Vision",
    "vision-content" : "elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let background = document.querySelectorAll('body');

let anchors = document.querySelectorAll('a');

anchors[0].innerHTML = siteContent["nav"]["nav-item-1"]
anchors[1].innerHTML = siteContent["nav"]["nav-item-2"]
anchors[2].innerHTML = siteContent["nav"]["nav-item-3"]
anchors[3].innerHTML = siteContent["nav"]["nav-item-4"]
anchors[4].innerHTML = siteContent["nav"]["nav-item-5"]
anchors[5].innerHTML = siteContent["nav"]["nav-item-6"]

anchors.forEach(item => {
  item.addEventListener('mouseenter', event => {
      event.target.style.transform = "scale(1.2)";
      event.target.style.color = 'blue'; 
      event.target.style.transition = "all 0.3s";
      event.target.style.textDecoration = 'none'; 
  })

  item.addEventListener('mouseleave', event => {
      event.target.style.transform = "scale(1.0)";
      event.target.style.color = 'black'; 
      event.target.style.transition = "all 0.3s";
  })
})


let headerOne = document.querySelectorAll("h1");

headerOne.innerHTML = siteContent["cta"]["h1"]



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src2"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["img-src3"])

let getStarted = document.querySelector("button");
getStarted.textContent = siteContent["cta"]["button"]

document.querySelectorAll('button').forEach(item => {
  item.addEventListener('mouseenter', event => {
    event.target.style.transform = "scale(1.2)";
      event.target.style.color = 'blue'; 
      event.target.style.background = 'grey'; 
      event.target.style.transition = "all 0.3s";

  })

  item.addEventListener('mouseleave', event => {
      event.target.style.color = 'black'; 
      event.target.style.background = 'white'; 
      event.target.style.transform = "scale(1.0)";
  })
})

let domIsAwesome = document.querySelector("h1");
domIsAwesome.textContent = siteContent["cta"]["h1"]

let  textContent = document.querySelectorAll("p");



textContent[0].innerHTML = siteContent["main-content"]["features-content"]
textContent[1].innerHTML = siteContent["main-content"]["about-content"]
textContent[2].innerHTML = siteContent["bottom-content"]["services-content"]
textContent[3].innerHTML = siteContent["bottom-content"]["product-content"]
textContent[4].innerHTML = siteContent["bottom-content"]["vision-content"]
textContent[5].innerHTML = siteContent["contact"]["address"]
textContent[6].innerHTML = siteContent["contact"]["phone"]
textContent[7].innerHTML = siteContent["contact"]["email"]
textContent[8].innerHTML = siteContent["footer"]["copyright"]



let contentH4 = document.querySelectorAll("h4");

contentH4[0].innerHTML = siteContent["main-content"]["features-h4"]
contentH4[1].innerHTML = siteContent["main-content"]["about-h4"]
contentH4[2].innerHTML = siteContent["bottom-content"]["services-h4"]
contentH4[3].innerHTML = siteContent["bottom-content"]["product-h4"]
contentH4[4].innerHTML = siteContent["bottom-content"]["vision-h4"]





