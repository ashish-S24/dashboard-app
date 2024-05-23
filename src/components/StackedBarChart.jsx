import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart , BarElement , CategoryScale, LinearScale , Tooltip , Legend } from 'chart.js';

Chart.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,

)

export const StackedBarChart = () => {
    const data = {
        labels : ["Jan", "Feb", "Mar", "Apr", "May" , "Jun", "jul" , "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets : [
            {
                label:"Last year",
                data:[54 , 67 , 41 , 55 ,62 , 45 , 55 , 73 ,60 , 76, 49 , 79],
                backgroundColor:"#3B82EC",
                barThickness:10,
                borderRadius: 10
            },
            {
                label:"This year",
                data:[69 , 66 , 24 , 48 , 51, 52, 44 , 53 , 62 , 79  ,51 , 68],
                backgroundColor:"#a1c3fc",
                barThickness:10,
                borderRadius: 10
            }
        ]
    }

    const options = {
        scales : {
            x:{
                stacked: true,
                grid : {
                    display:false
                }
            },
            y : {
                stacked: true,
                // grid : {
                //     display:false
                // }
            },
            
        }
    }
  return (
    <div className='bg-white p-4 rounded-md'>
        <h1>Sales / Revenue</h1>
        <Bar className='mt-5' options={options} data={data}></Bar>
    </div>
  )
}
