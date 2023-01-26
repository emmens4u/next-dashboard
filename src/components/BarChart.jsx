import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets:[],
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(()=>{
        setChartData({
            labels:['Mon','Tue', 'Wed','Thurs','Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 2901, 19490, 17938, 24182, 17452, 22475],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgb(53, 162, 235)'
                }
            ]
        })
        setChartOptions({
            plugins:{
                legend:{
                    position: 'top',
                },
                title:{
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg'>
            <Bar data={chartData} options={chartOptions} />
        </div>
    </>
  )
}

export default BarChart