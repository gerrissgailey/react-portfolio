import React from 'react'

function Resume() {
    return (
        <div>
            <section class="container bg-info card">
                <div class="row">
                    <div class="col-sm-6 my-3">
                        <h1>Resume</h1>
                    </div>
                </div>
                <div class="row">
                    <iframe src="assets/docs/gerriss-gailey-resume.pdf" width="100%" height="1125px">
                    </iframe>
                </div>
            </section>
        </div>
    )
}

export default Resume
