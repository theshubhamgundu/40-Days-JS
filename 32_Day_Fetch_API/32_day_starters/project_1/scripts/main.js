// Main JavaScript file for Day 32 - Fetch API

// Function to display loading message
function showLoading() {
    const output = document.getElementById('output');
    output.innerHTML = '<div class="loading">Loading...</div>';
}

// Function to display error message
function showError(message) {
    const output = document.getElementById('output');
    output.innerHTML = `<div class="error">Error: ${message}</div>`;
}

// Function to display posts
function displayPosts(posts) {
    const output = document.getElementById('output');
    if (!posts || posts.length === 0) {
        output.innerHTML = '<p>No posts found.</p>';
        return;
    }
    
    let html = '';
    posts.slice(0, 5).forEach(post => {
        html += `
            <div class="post">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-body">${post.body}</p>
                <small>Post ID: ${post.id}</small>
            </div>
        `;
    });
    
    output.innerHTML = html;
}

// Function to load posts using Fetch API
async function loadPosts() {
    try {
        showLoading();
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        showError(error.message);
    }
}

// Function to create a new post
async function createPost() {
    try {
        showLoading();
        const newPost = {
            title: 'My New Post',
            body: 'This is the content of my new post.',
            userId: 1
        };
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const createdPost = await response.json();
        const output = document.getElementById('output');
        output.innerHTML = `
            <div class="post">
                <h3 class="post-title">${createdPost.title}</h3>
                <p class="post-body">${createdPost.body}</p>
                <small>New Post ID: ${createdPost.id}</small>
            </div>
            <p>Post created successfully!</p>
        `;
    } catch (error) {
        showError(error.message);
    }
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const loadPostsBtn = document.getElementById('loadPosts');
    const createPostBtn = document.getElementById('createPost');
    
    if (loadPostsBtn) {
        loadPostsBtn.addEventListener('click', loadPosts);
    }
    
    if (createPostBtn) {
        createPostBtn.addEventListener('click', createPost);
    }
});

// Export functions for potential reuse
export { loadPosts, createPost, displayPosts, showLoading, showError };