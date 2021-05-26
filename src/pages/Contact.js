import React from 'react'

function Contact() {
    return (
        <div>
            <section className="container bg-info card">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm my-3">
                                <h1>Contact</h1>
                                <p className="lead">I can be reached by email at <a className="text-white mx-auto" href="mailto: gerrissgailey@gmail.com" target="_blank">gerrissgailey@gmail.com</a> or by filling out the contact form below.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <form>
                                    <div className="form-group">
                                        <label for="formGroupExampleInput">Name</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="formGroupExampleInput2">Email</label>
                                        <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                            placeholder="Enter Your Message Here"></textarea>
                                    </div>
                                    <div className="my-3">
                                        <button type="submit" className="btn btn-dark">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
