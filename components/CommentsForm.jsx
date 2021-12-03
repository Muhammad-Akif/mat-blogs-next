import React, { useState, useRef} from 'react'

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localstorage, setLocalstorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();
    
    return (
        <div>
            <h1>CommentsForm</h1>
        </div>
    )
}

export default CommentsForm
