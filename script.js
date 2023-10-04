const accessKey = "5SMnL1Kj3KRgqWUXINstM87ccsK2T2CuSmYP0496-yQ";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const search = document.getElementById("search");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

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

    const results = data.results;

    // const h2 = document.createElement("h2");
    // h2.innerHTML = "Error";
    // form.appendChild(h2);

    // if(data.total === 0){
       
    // }
    // console.log(data,valiiiuuuuuuuuuuuuuuuuuuuuuuu);

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";

}

searchBox.value = "";

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});



// search.addEventListener("click", () =>{
    
//     page = 1;
//     searchImages();
// })

showMoreBtn.addEventListener("click", () =>{
    page++;
    searchImages();
})