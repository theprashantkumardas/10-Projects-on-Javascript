console.log("hello get started")

let bitcoin = document.querySelector("#bitcoin");
let ethereum = document.querySelector("#ethereum");
let dogecoin = document.querySelector("#dogecoin");
let settings = {
    async: true,
    scrossDomain: true,
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    method : "GET",
    headers : {}

}
$.ajax(settings).done(function (response){
    console.log(response)
    bitcoin.innerText = response.bitcoin.usd;
    ethereum.innerText = response.ethereum.usd;
    dogecoin.innerText = response.dogecoin.usd;
});