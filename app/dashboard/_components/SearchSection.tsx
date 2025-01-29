import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
        <div className="p-10 bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 flex flex-col justify-center items-center">
            
            <h2 className='text-3xl font-bold'>
            Browse All Templates
            </h2>
            <p> What would you like to create today?</p>

            <div className='w-80'>
                <div className='flex gap-2 items-center p-2 border rounded bg-white my-5'>
                    <Search className='text-primary'/>
                    <input type="text" placeholder='Search' onChange={(event)=> onSearchInput(event.target.value)}
                    className='bg-transparent w-full outline-none'/>
                </div>
            </div>
        </div>
  )
}

export default SearchSection