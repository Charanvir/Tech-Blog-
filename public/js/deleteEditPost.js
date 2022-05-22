async function deletePost(event) {
    event.preventDefault();

    const post_id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]

    const deletePost = await fetch(`/api/posts/${post_id}`, {
        method: 'delete'
    })

    if (deletePost.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("There was a problem deleting the post. Please try again")
    }


}
async function editPost(event) {
    event.preventDefault();
    const post_id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    console.log(post_id)
}

document.querySelector("#deleteBtn").addEventListener('click', deletePost);
document.querySelector("#editBtn").addEventListener('click', editPost)