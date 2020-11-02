var key={
    key: "f13e2a8b-5dca-4e37-a6de-fcabd2649d59"
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='
    +key.key
).then((response)=>{
    if(!response.ok) throw new Error('Error ao executar a req, status ' + response.status);
    return response.json();
}).then((api)=>{
   var html = "";

   for(let i =0; i<10; i++){
    html = html + `
        <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="50"/>
            <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
            </div>
        </div>
    `;
   }

   document.querySelector('#coins').innerHTML=html;
})
.catch((error)=>{
    console.log(error);
});