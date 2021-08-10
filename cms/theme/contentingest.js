// Content Ingestor for Default Theme
// 1.0.0
const urlParams = new URLSearchParams(window.location.search);

// Get the page (cms selector)
const cmspage = urlParams.get('page');

// Get the page (real page)
const realpage = location.href.split('/').slice(-1);

if (
  (realpage == '' && cmspage == null) ||
  (realpage == 'index.html' && cmspage == null)
) {
  GunCMS.render(0);
}