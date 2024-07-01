import React, { useState } from 'react'
import './style.scss'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import NumberCard from '../../components/numberCard'
import NotificationCard from '../../components/notificationCard'
import AddQuickCard from '../../components/layout/addQuickCard'
import NewEmployeeCard from '../../assets/svg/newEmployee.svg'
import NewOrderCard from "../../assets/svg/newOrders.svg"
import NewConsortiumCard from "../../assets/svg/newConsortiums.svg"
import NewPools from "../../assets/svg/newPools.svg"
import Consortium_white from "../../assets/svg/Consortiums_white.svg"
import Pool_white from "../../assets/svg/RandomPools_white.svg"
import Character from "../../assets/svg/character.svg"
import NewOrder from "../../assets/svg/newOrders.svg"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function Dashboard() {
  const [labels, setLabels] = useState([
    "Positive", "Negative"
  ])
  const [drugDatasets, setDrugDatasets] = useState([{
    data: [60, 40], 
    backgroundColor: ['#0AAA4A', '#EFF4FB']
  }])
  const [alcoholDatasets, setAlcoholDatasets] = useState([{
    data: [70, 30], 
    backgroundColor: ['#0AAA4A', '#EFF4FB']
  }])

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const notifications = [
    {
      id: 1, 
      title: "PharmaCare Inc. just received a new notification", 
      content: "PharmaCare Inc. just received a new notification"
    }, 
    {
      id: 2, 
      title: "PharmaCare Inc. just received a new notification", 
      content: "PharmaCare Inc. just received a new notification"
    }, 
    {
      id: 3, 
      title: "PharmaCare Inc. just received a new notification", 
      content: "PharmaCare Inc. just received a new notification"
    }
  ]
  return (
    <div className='page'>
    	<div className="title">Dashboard</div>
      <div className="dashboard-container">
      <div></div>
      <div className="numberCardBox">
        <NumberCard title="New Employee" number={40}>
          <div className='left employeeBg'>
            <img src={NewEmployeeCard} alt='svg' />
          </div>
        </NumberCard>
        <NumberCard title="New Orders" number={102}>
          <div className='left orderBg'>
            <img src={NewOrderCard } alt='svg' />
          </div>
        </NumberCard>
        <NumberCard title="New Consortiums" number={100}>
          <div className='left consortiumBg'>
            <img src={NewConsortiumCard} alt='svg' />
          </div>
        </NumberCard>
        <NumberCard title="New Employers" number={40}>
          <div className='left employeeBg'>
            <img src={NewEmployeeCard} alt='svg' />
          </div>
        </NumberCard>
        <NumberCard title="New Pools" number={40}>
          <div className='left poolsBg'>
            <img src={NewPools} alt='svg' />
          </div>
        </NumberCard>
      </div>
      <div className='chartBox'>
        <div className='actionBox cardWidth-30'>
          <div className='actionTitle'>Quick Actions</div>
          <div className='addCardBox'>
            <AddQuickCard title='Add New Consortiums' icon={Consortium_white} />
            <AddQuickCard title='Add New Pool' icon={Pool_white} />
            <AddQuickCard title='Add New Employer' icon={Character} />
            <AddQuickCard title='Add New Employee' icon={Character} />
            <AddQuickCard title='Create New Order' icon={NewOrder} />
          </div>
        </div>
        <div className='chartContainer cardWidth-70'>
          <div className='actionBox cardWidth-50'>
            <div className='actionTitle'>
              <div>Drug Tests</div>
              <div className='detail'>Total 1000</div>
            </div>
            <div className='addCardBox'>
              <div className='chartBoxSize'>
                <Pie 
                  data={{
                    labels: labels, 
                    datasets: drugDatasets
                  }}
                  options={options}
                />
              </div>
              <div className='detailInfo'>
                <div className='detail'>
                  <div className='percentage'>{drugDatasets[0].data[0] + '%'}</div>
                  <div className='label'>
                    <div className='postiveBadge'></div>
                    <div className='label-name'>Positive</div>
                  </div>
                  <div className='number'>{1000 * drugDatasets[0].data[0] / 100}</div>
                </div>
                <div className='detail'>
                  <div className='percentage'>{drugDatasets[0].data[1] + '%'}</div>
                  <div className='label'>
                    <div className='negativeBadge'></div>
                    <div className='label-name'>Positive</div>
                  </div>
                  <div className='number'>{1000 * drugDatasets[0].data[1] / 100}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='actionBox cardWidth-50'>
            <div className='actionTitle'>
              <div>Alcohol Tests</div>
              <div className='detail'>Total 1000</div>
            </div>
            <div className='addCardBox'>
              <div className='chartBoxSize'>
                <Pie 
                  data={{
                    labels: labels, 
                    datasets: alcoholDatasets
                  }}
                  options={options}
                />
              </div>
              <div className='detailInfo'>
                <div className='detail'>
                  <div className='percentage'>{alcoholDatasets[0].data[0] + '%'}</div>
                  <div className='label'>
                    <div className='postiveBadge'></div>
                    <div className='label-name'>Positive</div>
                  </div>
                  <div className='number'>{1000 * alcoholDatasets[0].data[0] / 100}</div>
                </div>
                <div className='detail'>
                  <div className='percentage'>{alcoholDatasets[0].data[1] + '%'}</div>
                  <div className='label'>
                    <div className='negativeBadge'></div>
                    <div className='label-name'>Positive</div>
                  </div>
                  <div className='number'>{1000 * alcoholDatasets[0].data[1] / 100}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='notificationBox'>
        <div className='noti-title'>Notifications</div>
        {
          notifications.map((noti:any, index:number) => {
            return (
              <NotificationCard key={index} title={noti.title} content={noti.content} />
            )
          })
        }
      </div>
      </div>
    </div>
  )
}
