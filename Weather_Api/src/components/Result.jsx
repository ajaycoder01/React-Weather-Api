import React from 'react'

export default function Result({wheatherData,history,historySearchHandler}){
    const historyList=history.map((item,index)=>{
        return <li className='cursor-pointer' key={index} 
        onClick={()=>{historySearchHandler(item)}}>{item}</li>
    })
    return (
        <>

    <div className='w-9/12 mx-auto mt-5 p-1 border border-solid border-black '>
        <div className='grid grid-cols-2 bg-yellow-900 divide-x'>
            <div className='text-white text-center'>
                <h2 className='text-center text-2xl'> History</h2>
                <ul>
                    {historyList}
                    {/* {wheatherData.name} */}
                </ul>
            </div>
            <div className='text-white text-center'>
                {
                        wheatherData.length !== 0
                            ? 
                            <>
                    <h1 className='text-3xl'>{wheatherData.name}</h1>
                <div className='grid grid-cols-2'>
                    <div>Max-Temp: {wheatherData.main.temp_max}</div>
                    <div>Min-Temp: {wheatherData.main.temp_min}</div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='pl-[140px]'>
                        <img src={`http://openweathermap.org/img/w/${wheatherData.weather[0].icon}.png`}/>
                     </div>
                    <div>{wheatherData.weather[0].main}</div>
                </div> 
                </>
                        :
                <>
                    <h3>Please Enter the city.</h3>
                </>
                    
                    }
            </div>
        </div>
    </div>

        </>
    )
}
