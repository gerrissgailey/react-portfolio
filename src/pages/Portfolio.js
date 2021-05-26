import React from 'react'

function Portfolio() {
    return (
        <div>
            <section className="container bg-info card m-auto p-auto">
                <div className="row">
                    <div className="col-sm-6 my-3">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="card-deck px-4">
                        <div className="card">
                            <img src="assets/demo/middle-earth-supplier-preview.gif" className="card-img-top" alt="Middle-Earth Supplier" />
                            <div className="card-body text-center">
                                <a href="https://middleearthsupplier.herokuapp.com/" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>Middle-Earth Supplier</a>
                                <p className="card-text">For when you're travelling through Middle-Earth and you find yourself in need of supplies. Or a nice Ale... Yes, they come in pints!</p>
                                <a className="text-primary link-text" href="https://github.com/gerrissgailey/MiddleEarthSupplier" target="_blank" style={{fontSize : '16px'}}>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="assets/demo/dine-decider-preview.gif" className="card-img-top" alt="Decider Diner" />
                            <div className="card-body text-center">
                                <a href="https://gerrissgailey.github.io/Dine-Decider/" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>Decider Diner</a>
                                <p className="card-text">Trying to figure out what to eat tonight? Decider Diner can help with that! (tip not included)</p>
                                <a className="text-primary link-text" href="https://github.com/gerrissgailey/Dine-Decider" target="_blank" style={{fontSize : '16px'}}>GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-deck p-4">
                        <div className="card">
                            <img src="assets/demo/eat-da-burger-preview.gif" className="card-img-top" alt="Eat-Da-Burger" />
                            <div className="card-body text-center">
                                <a href="https://calm-mesa-07477.herokuapp.com/" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>Eat-Da-Burger</a>
                                <p className="card-text">When you feel like stuffing your face with burgers... Virtually...</p>
                                <a className="text-primary link-text" href="https://github.com/gerrissgailey/eat-da-burger" target="_blank" style={{fontSize : '16px'}}>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="assets/demo/employee-tracker-preview.gif" className="card-img-top" alt="Employee Tracker" />
                            <div className="card-body text-center">
                                <a href="https://github.com/gerrissgailey/employee-tracker" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>Employee Tracker - on GitHub</a>
                                <p className="card-text">A way to keep track of your workplace departments, roles, and employees. It doesn't do the firing part though. You still have to do that part.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="assets/demo/weather-dash-preview.gif" className="card-img-top" alt="Weather Dashboard" />
                            <div className="card-body text-center">
                                <a href="https://gerrissgailey.github.io/weather-dashboard/" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>Weather Dashboard</a>
                                <p className="card-text">What will the weather be today? Yes, there are hundreds of weather apps, but it's fun to create your own.</p>
                                <a className="text-primary link-text" href="https://github.com/gerrissgailey/weather-dashboard" target="_blank" style={{fontSize : '16px'}}>GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-deck p-4">
                        <div className="card">
                            <img src="assets/demo/scheduler-preview.gif" className="card-img-top" alt="Work Day Scheduler" />
                            <div className="card-body text-center">
                                <a href="https://gerrissgailey.github.io/the-work-day-scheduler/" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>Work Day Scheduler</a>
                                <p className="card-text">If you're anything like me, you might forget to get dressed unless you write it down... Kidding! But this app may help with planning a work day schedule.</p>
                                <a className="text-primary link-text" href="https://github.com/gerrissgailey/the-work-day-scheduler" target="_blank" style={{fontSize : '16px'}}>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="assets/demo/js-quiz-preview.gif" className="card-img-top" alt="JavaScript Quiz" />
                            <div className="card-body text-center">
                                <a href="https://gerrissgailey.github.io/javascript-quiz/" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>JavaScript Quiz</a>
                                <p className="card-text">We all like taking tests, right? A short and simple quiz app designed for testing one's understanding of JavaScript.</p>
                                <a className="text-primary link-text" href="https://github.com/gerrissgailey/javascript-quiz" target="_blank" style={{fontSize : '16px'}}>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="assets/demo/pass-gen-preview.gif" className="card-img-top" alt="Password Generator" />
                            <div className="card-body text-center">
                                <a href="https://gerrissgailey.github.io/password-generator/" target="_blank" className="btn btn-secondary btn-block btn-lg" style={{borderRadius : '5px'}}>Password Generator</a>
                                <p className="card-text">Random Password Generators... Because lets face it. You don't already have a hard enough time remembering the passwords you come up with on your own.</p>
                                <a className="text-primary link-text" href="https://github.com/gerrissgailey/password-generator" target="_blank" style={{fontSize : '16px'}}>GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
