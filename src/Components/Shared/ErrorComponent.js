
    import React from 'react'
    import Alert from 'react-bootstrap/Alert'
    export const ErrorComponent = ({message}) =>{
        return (
            <Alert  variant='danger'>
                 {message}
            </Alert>
        )
    }
