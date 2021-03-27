import React from 'react'
import {Bar, defaults } from "react-chartjs-2"

defaults.global.tooltips.enabled= true;
defaults.global.animation.easing= 'easeInElastic'
defaults.global.layout.padding={
    left: 50,
    right: 0,
    top: 0,
    bottom: 0}


const BarChart = () => {
    return(
       <div>
           <Bar
           data = {{
            labels: ['Fatimah', 'Samira', 'Ahlam', 'lulu', 'Shoq', 'Raghad'],
           datasets:[
               {
                   label: "# off of class",
                   data: [12,19,3,5,2,3],
                   backgroundColor:[
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],      borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 5,
               },
              /* {
                   label: "Quantity",
                   data: [56,17,32,65,18,40],
                   backgroundColor: "orange",
                   borderColor: "red",
               }*/
           ]   
        }}
            
           width={600}
           height={400} 
           options={{ 
               
               maintainAspectRatio:false,
               scales:{
                   yAxes:[
                       {
                           ticks:{
                               beginAtZero:true
                           }
                       }
                   ]
               },
               legend:{
                   labels:{
                       fontSize:20,
                       fontStyle:'Helvetica Neue'
                   }
               }
            }}/>
       </div>
    )
}

export default BarChart
