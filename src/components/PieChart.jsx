import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart , ArcElement , CategoryScale, LinearScale , Tooltip } from 'chart.js';

Chart.register(
    ArcElement,
    Tooltip
)

export const PieChart = () => {
    const data = {
        labels :["Social" , "Search engine", "Direct", "Other"],
        datasets: [
            {
                data:[260 , 125 , 54 , 146],
                backgroundColor:["#3b82ec", "#f0ad4e", "#da5350", "#e9eaed"],
                borderWidth:4,
                spacing:8,
               
            }
        ]

    }

    const options = {
       sliceThikness : 12
    }
  return (
    <div className='w-full bg-white flex justify-center'>
        <div className='w-[200px]'>
            <Doughnut className='' data={data} options={options}></Doughnut>
        </div>
    </div>
  )
}
