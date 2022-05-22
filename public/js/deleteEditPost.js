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
    const title = document.querySelector('#editTitle').value.trim();
    const post_text = document.querySelector('#editContent').value.trim();
    if (title && post_text) {
        const editedPost = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title, post_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (editedPost.ok) {
            document.location.reload();
        } else {
            alert("Post update failed, please try again")
        }

    }
}

document.querySelector("#deleteBtn").addEventListener('click', deletePost);
document.querySelector("#editBtn").addEventListener('click', editPost)