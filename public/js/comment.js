async function leaveComment(event) {
    event.preventDefault();

    const comment_text = document.querySelector("#commentTextArea").value.trim();
    const post_id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]

    if (comment_text) {
        const comment = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                comment_text, post_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (comment.ok) {
            document.location.reload();
        } else {
            alert("Comment submission failed!")
        }
    }
}

document.querySelector(".commentButton").addEventListener('click', leaveComment)