import React from 'react';
import Comment from './Comment';

const commentsData = [
    {
        name: 'Surendra Singh 1',
        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        replies: [
            {
                name: 'Surendra Singh nested 1',
                text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                replies: [
                    {
                        name: 'Surendra Singh nested 2',
                        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                        replies: [
                            {
                                name: 'Surendra Singh nested 3',
                                text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                                replies: [
                                    {
                                        name: 'Surendra Singh nested 4',
                                        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                                        replies: [
                                            {
                                                name: 'Surendra Singh nested 5',
                                                text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                                                replies: [
                        
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Surendra Singh 2',
        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        replies: [
            {
                name: 'Surendra Singh nested 2',
                text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                replies: [

                ]
            }
        ]
    },
    {
        name: 'Surendra Singh 3',
        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        replies: [
            {
                name: 'Surendra Singh nested 2',
                text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                replies: [
                    {
                        name: 'Surendra Singh nested 2',
                        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                        replies: [

                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Surendra Singh 4',
        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        replies: [

        ]
    },
    {
        name: 'Surendra Singh 5',
        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        replies: [

        ]
    },
    {
        name: 'Surendra Singh 6',
        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        replies: [
            {
                name: 'Surendra Singh nested 2',
                text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                replies: [
                    {
                        name: 'Surendra Singh nested 2',
                        text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
                        replies: [

                        ]
                    }
                ]
            }
        ]
    }
]

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} >
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies} /> 
            </div>
        </div>
    ))
}

const CommentContainer = () => {
    return (
        <div className='m-5 p-2'>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentContainer;