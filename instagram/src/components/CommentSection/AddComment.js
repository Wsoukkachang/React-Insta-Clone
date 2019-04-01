import React from 'react';

const AddComment = props => {
    return (
        <form onSubmit={props.add}>
            <input
                className="addComment"
                name="newcomment"
                placeholder="Add a comment..."
                onChange={props.inputChange}
                value={props.value}
            />
        </form>
    )
}

export default AddComment;