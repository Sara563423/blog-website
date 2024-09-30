// Function to toggle the "Read More" content
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const button = document.getElementById('read-more-btn-' + contentId.split('-').pop());

    if (content.style.display === 'none') {
        // Show the hidden content
        content.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        // Hide the content
        content.style.display = 'none';
        button.textContent = 'Read More';
    }
}
