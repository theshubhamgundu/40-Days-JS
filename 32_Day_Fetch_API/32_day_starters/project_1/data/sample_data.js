// Sample data for Day 32 Fetch API exercises

const samplePosts = [
    {
        userId: 1,
        id: 1,
        title: "Sample Post 1",
        body: "This is the body of the first sample post. It contains some sample text for demonstration purposes."
    },
    {
        userId: 1,
        id: 2,
        title: "Sample Post 2",
        body: "This is the body of the second sample post. It contains some sample text for demonstration purposes."
    },
    {
        userId: 1,
        id: 3,
        title: "Sample Post 3",
        body: "This is the body of the third sample post. It contains some sample text for demonstration purposes."
    }
];

const apiEndpoints = {
    posts: 'https://jsonplaceholder.typicode.com/posts',
    users: 'https://jsonplaceholder.typicode.com/users',
    comments: 'https://jsonplaceholder.typicode.com/comments'
};

// Export for use in other modules
export { samplePosts, apiEndpoints };