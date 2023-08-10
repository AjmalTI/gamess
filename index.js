const linkPreview = document.getElementById('linkPreview');
const linkIframe = document.getElementById('linkIframe');
const closeButton = document.getElementById('closeButton');

function openLinkPreview(linkURL) {
    linkIframe.src = linkURL;
    linkPreview.style.display = 'flex';
}

closeButton.addEventListener('click', () => {
    linkIframe.src = '';
    linkPreview.style.display = 'none';
});

linkPreview.addEventListener('click', (event) => {
    if (event.target === linkPreview) {
        linkIframe.src = '';
        linkPreview.style.display = 'none';
    }
});
