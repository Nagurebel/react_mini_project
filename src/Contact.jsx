import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phoneno: '',
        email: '',
        description: ''
    })
    const [submitBtn, setSubmitBtn] = useState([])

    const eventHandler = (e) => {
        const { name, value } = e.target
        setData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const formData = (e) => {
        e.preventDefault()
        alert(submitBtn.map(val => val.fullname))
        setSubmitBtn((formData) => {
            return [...formData, data]
        })
        setData({
            fullname: '',
            phoneno: '',
            email: '',
            description: ''
        })
    }

    return (
        <>
            <div className='my-2'>
                <h1 className='text-center'>Contact</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto d-flex align-items-center justify-content-center border-dark'>
                        <form onSubmit={formData}>
                            <div className="mb-1">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" name='fullname' value={data.fullname} onChange={eventHandler} id="exampleFormControlInput1" placeholder="enter your name" />
                            </div>
                            <div className="mb-1">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="Number" className="form-control" name='phoneno' value={data.phoneno} onChange={eventHandler} id="exampleFormControlInput1" placeholder="enter your phone no" />
                            </div>
                            <div className="mb-1">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' value={data.email} onChange={eventHandler} id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-1">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name='description' value={data.description} onChange={eventHandler} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact