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
  GunCMS.render(0, function(title, navbar, body, footer, header, scripts) {
    // Render Navbar
    html = $.parseHTML(navbar);
    $('#navbar-right').append(html);

    // Render Title
    document.title = title;
    $('#navbar-title').text(title);

    // Render Body
    html = $.parseHTML(body);
    $('#content').append(html);
  });
}
