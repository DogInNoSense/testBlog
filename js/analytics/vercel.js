<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\css\APlayer.min.css"><script src="\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\js\Meting.min.js"></script>window.va = function() {
    (window.vaq = window.vaq || []).push(arguments);
};
window.va('beforeSend', (event) => {
    if (event.url.includes('secret')) return null;
    return event;
});