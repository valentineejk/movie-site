import React from 'react'
import Hero from './Hero'

const SearchView=({keyword,searchResults}) => {
    const title=`you are searching for ${keyword}`
    return (
        <>
            <Hero text={title} />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>
                            ...
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchView