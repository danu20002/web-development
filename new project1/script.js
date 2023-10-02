const accessKey="TSb7NCBFY2gN1F5Zki5gTniWDESb6ncLNcvEW4HSqWA";
const formE1=document.querySelector("form");
const inputE1=document.getElementById("search_input");
const searchResults=document.querySelector(".search_results");
const showmore=document.getElementById("show-more-button");


let inputData="";
let page=1;
 async function serachImages(){
    inputData=inputE1.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const respose=await fetch(url);
    const data=await respose.json();
    const results=data.results;
    if(page === 1){
        searchResults.innerHTML= "";
    }
    results.map((result)=>{
       const imagesWrapper=document.createElement("div");
       imagesWrapper.classList.add("search-result");
       const image=document.createElement("img");
       image.src=result.urls.small;
       image.alt=result.alt_description;
       const imaglink=document.createElement("a");
       imaglink.href=result.links.html;
       imaglink.target="_blank";
    imaglink.textContent=alt_description;
    imagesWrapper.appendChild(image);
    imagesWrapper.appendChild(imaglink);
    searchResults.appendChild(imagesWrapper);
    });
page++
if(page>1){
    showmore.style.display="block";  //to display the button after first click
}
}
formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    serachImages();
});
showmore.addEventListener("click",()=>{
    
    serachImages();
});