let featureDiv = document.getElementById("feature");
let companyDiv = document.getElementById("company");


let arrowDownFeature = document.getElementById("arrow-down-feature");
let arrowUpFeature = document.getElementById("arrow-up-feature");

let arrowDownCompany = document.getElementById("arrow-down-company");
let arrowUpCompany = document.getElementById("arrow-up-company");

let spanCompany = document.getElementById("span-company"); 
let spanFeature = document.getElementById("span-feature"); 







featureDiv.addEventListener("mouseover", ()=> {
    spanFeature.style.display = "inline";
    arrowUpFeature.style.display = "inline";
    arrowDownFeature.style.display = "none";
    
});

companyDiv.addEventListener("mouseover", ()=> {
    spanCompany.style.display = "inline";
    arrowUpCompany.style.display = "inline";
    arrowDownCompany.style.display = "none";
    
});





spanFeature.addEventListener("mouseout", ()=> {
    spanFeature.style.display = "none";
    arrowUpFeature.style.display = "none";
    arrowDownFeature.style.display = "inline";
    
});

spanCompany.addEventListener("mouseout", ()=> {
    spanCompany.style.display = "none";
    arrowUpCompany.style.display = "none";
    arrowDownCompany.style.display = "inline";
    
});


spanFeature.addEventListener("mouseover", ()=> {
    spanFeature.style.display = "inline";
    arrowUpFeature.style.display = "inline";
    arrowDownFeature.style.display = "none";
        
});
spanCompany.addEventListener("mouseover", ()=> {
    spanCompany.style.display = "inline";
    arrowUpCompany.style.display = "inline";
    arrowDownCompany.style.display = "none";
        
});




let arrowDownFeatureMobile = document.getElementById("arrow-down-feature-mobile");
let arrowUpFeatureMobile = document.getElementById("arrow-up-feature-mobile");

let arrowDownCompanyMobile = document.getElementById("arrow-down-company-mobile");
let arrowUpCompanyMobile = document.getElementById("arrow-up-company-mobile");

let spanCompanyMobile = document.getElementById("span-company-mobile"); 
let spanFeatureMobile = document.getElementById("span-feature-mobile"); 

let isFeature = false
function showFeature() {
    if(!isFeature) {
        spanFeatureMobile.style.display = "inline";
        arrowUpFeatureMobile.style.display = "inline";
        arrowDownFeatureMobile.style.display = "none";
        isFeature = true;
    }
    else if(isFeature) {
        spanFeatureMobile.style.display = "none";
        arrowUpFeatureMobile.style.display = "none";
        arrowDownFeatureMobile.style.display = "inline";
        isFeature = false; 
    }
}

let isCompany = false
function showCompany() {
    if(!isCompany) {
        spanCompanyMobile.style.display = "inline";
        arrowUpCompanyMobile.style.display = "inline";
        arrowDownCompanyMobile.style.display = "none";
        isCompany = true;
    }
    else if(isCompany) {
        spanCompanyMobile.style.display = "none";
        arrowUpCompanyMobile.style.display = "none";
        arrowDownCompanyMobile.style.display = "inline";
        isCompany = false; 
    }
}





/*body {
    overflow:hidden
}

mobile-menu {
    display: block
}


*/

let mobileMenu = document.querySelector(".mobile-menu");
let body = document.body;

let btnMenu = document.getElementById("btn-mobile-menu");

function showMenu() {
    mobileMenu.style.display = "block";
    body.style.overflow = "hidden";
}

function hideMenu() {
    console.log(1);
    mobileMenu.style.display = "none";
    body.style.overflow = "auto"; 
}


