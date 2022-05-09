import React from 'react'
import Hero from './Hero'

const About=() => {
    return (
        <>
            <Hero text="About" />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>
                            Labore aliqua et excepteur sit cillum exercitation anim.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About