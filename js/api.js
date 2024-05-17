async function fetchMediumPosts() {
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hendprw');
    const data = await response.json();
    const posts = data.items.slice(0, 5); 
    const postsContainer = document.getElementById('medium-posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('col-md-12'); 
        const pubDate = new Date(post.pubDate).toLocaleDateString('id-ID');
        postElement.innerHTML = `
            <h5><a class="medium" href="${post.link}" target="_blank">${post.title}</a></h5>
        `;
        postsContainer.appendChild(postElement);
    });
}

fetchMediumPosts();


document.addEventListener('contextmenu', function(e) {
    alert("Apaan?")
    e.preventDefault(); 
});
