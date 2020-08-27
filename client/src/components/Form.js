import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';


const Forms = (props) => {
    return (
        <Form inline>
            <FormControl type="text" placeholder={props.placeholder} className={props.className} />
            <Button type="submit">{props.btnSubmitText}</Button>
        </Form>
    )
}

export default Forms
