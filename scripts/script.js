// Show/hide the navigation display during mobile display.
// Get the navigation element - should be navRight
var nav = document.getElementById('navRight'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'with_nav';
    e.preventDefault();
});
