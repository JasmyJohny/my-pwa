console.log(document);
console.log(window);
console.log(navigator.serviceWorker);
if('serviceWorker' in navigator)
{
    //console.log("Yeah..");
    navigator.serviceWorker.register('../service_worker.js');
}
else
{
    console.log("Noo");
}

// if ('serviceWorker' in navigator) {

//     navigator.serviceWorker.register('../service-worker.js')
//     .then((registration) => {
//     console.log('Success. Scope:', registration.scope);
//     })
//     .catch((error) => {
//     console.log('Failed. Error:', error);
//     });
// }