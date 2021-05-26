import React from 'react'

function Home() {
    return (
        <div>
            <container>

            <section className="container bg-info card">
                <div className="row">
                    <div className="col-sm-6 my-3">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-3">
                        <img src="assets/gerriss.jpg" alt="Gerriss Gailey" className="img-fluid mb-4" />
                    </div>

                    <div className="col-md-9">
                        <p className="line height: 3px">I'm Gerriss. I grew up in West Jordan, UT but honestly can't stand the Salt Lake Valley so I relocated to St. George, UT in 2010. I've been married to my beautiful wife for 16 years and have two beautiful little girls. I enjoy tech, CAD design, 3D printing, trading the foreign currency markets, camping, and spending time with the family.</p>
                        <p className="line height: 3px">I have a diverse career background having worked in various fields from foreign currency markets, underground utility locating services, CNC machining, pastoral/clergy, to my current field in CAD drafting/mechanical design/3D printing for the last 5 years. I find thorough enjoyment in just about all things "tech" which in part has made me interested to add full stack web development to my skillset.</p>
                    </div>
                </div>
            </section>
            </container>
        </div>
    )
}

export default Home
