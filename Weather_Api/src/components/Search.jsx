import React, { useRef } from 'react'

export default function Search(props) {
  const searchInput = useRef();
  // localStorage.setItem('item', JSON.stringify({...Search}));
  return (
    <>
        <div className='md:container max-w-full  m-auto relative'>
            <h1 className='text-center text-3xl pb-3 text-red-800 pb-5'>Wheather Report</h1>
                <div className='w-9/12 flex m-auto'>
                <input type='search' placeholder=' Search...' className='w-full h-12 px-4 rounded-2xl mx-auto border border-solid border-black placeholder:italic placeholder:text-slate-500 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' ref={searchInput} value={props.searchData}
                onChange={()=>{props.changeSearch(searchInput.current.value)}}></input>
                <input type='submit' value='Search' className='bg-black rounded p-3 text-white rounded-2xl absolute right-40' onClick={props.searchWheather}></input>
                </div> 
        </div>
    
    </>
  )
}
