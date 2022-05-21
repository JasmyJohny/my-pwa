
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('../service-worker.js')
    .then((registration) => {
    console.log('Success. Scope:', registration.scope);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
}