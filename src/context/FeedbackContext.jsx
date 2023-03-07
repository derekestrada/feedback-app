import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback Item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is Feedback Item 2',
            rating: 10,
        },
        {
            id: 3,
            text: 'This is Feedback Item 3',
            rating: 10,
        },
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Delete Feedback Item 
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    // Add Feedback Item 
    const addFeedback = (newFeedback) => {
        newFeedback.id = "this"
        setFeedback([newFeedback, ...feedback])
    }

    // Edit Feedback Item 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update Feedback Item 
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext