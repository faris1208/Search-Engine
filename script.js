const accessKey = "5SMnL1Kj3KRgqWUXINstM87ccsK2T2CuSmYP0496-yQ";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const search = document.getElementById("search");
const icon = document.getElementById("icon");
const showMoreBtn = document.getElementById("show-more-btn");
const box = document.getElementById("box");

let keyword = "";
let page = 1;

let results;

async function searchImages(){
    keyword = searchBox.value;
    // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data , 'datatatattata')

    if(page === 1){
        searchResult.innerHTML = "";
    }

    results = data.results;


    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        // imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
    // box.style.display = "block";


    if(searchBox.value === ""){
        box.style.display = "none";
        showMoreBtn.style.display = "none";
    }
    
    else if(searchBox.value === ""){
        box.style.display = "none";
        showMoreBtn.style.display = "none";
    }

    if( results){
        box.style.display = "none";
       
    }
    
    else if(results){
        box.style.display = "none";
        
    }

    if(data.total === 0){
        box.style.display = "block";
        showMoreBtn.style.display = "none";
    }
    else if(data.total === 0){
        box.style.display = "none";
        showMoreBtn.style.display = "block";
    }

    // searchBox.value = "";


}


searchForm.addEventListener("submit", (e) =>{

    e.preventDefault();
    page = 1;
    searchImages();

});

icon.addEventListener("click", (e) =>{
    // page++;
    // searchImages();
    // e.target.result.remove(result);
    // console.log(results ,'resultresultsresultss')
    // results = []
    searchResult.innerHTML = ""
    showMoreBtn.style.display = "none"
    searchBox.value = "";
    box.style.display = "none";
    
    // const parent = deleteButton.parentElement;
    // results.remove();
})



// search.addEventListener("click",searchImages);

showMoreBtn.addEventListener("click", () =>{
    page++;
    searchImages();
})