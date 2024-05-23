import { Navbar } from './components/Navbar';
import dropdown from "./assets/dropdown.png";
import calendar from './assets/calendar.png'
import { HeroCard } from './components/HeroCard';
import Card from './components/Card';
import { StackedBarChart } from './components/StackedBarChart';
import { PieChart } from './components/PieChart';
import RevenueTable from './components/Table';




function App() {

  return (
    <div className='bg-gray-100 h-fit w-screen border p-6'>
      <Navbar />
      <div className='mt-[100px]'>
        <div className='flex justify-between items-center w-full'>
          <div>
            <label className='text-2xl text-gray-700 font-bold'>Dashboard</label>
          </div>
          <div className='flex gap-2 h-[4vh]'>
            <span className='flex gap-1 rounded-md items-center justify-evenly bg-white px-2 h-full border hover:border-gray-400'>
              <img className='h-4 w-4' src={calendar}></img>
              <label className='text-md'>Today</label>
              <img className='h-4 w-4' src={dropdown}></img>
            </span>
            <span className='h-full w-[5vh] rounded-md bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-800'>
            <svg className='h-4 w-4 stroke-white fill-white' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 40" x="0px" y="0px"><title>filter</title><path d="M1.143 0c-0.885 0-1.434 0.962-0.985 1.725l12.413 16.561v12.571c0 0.85 0.894 1.402 1.654 1.022l4.571-2.286c0.387-0.194 0.631-0.589 0.631-1.022v-10.286l12.413-16.561c0.45-0.762-0.099-1.725-0.985-1.725zM3.146 2.286h25.707l-11.553 15.106c-0.104 0.176-0.159 0.377-0.158 0.581v9.892l-2.286 1.143v-11.035c0-0.205-0.055-0.405-0.158-0.581z"/><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by scott desmond</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
            </span>
            <span className='h-full w-[5vh] rounded-md bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-800'>
              <svg className='h-4 w-4 stroke-white fill-white' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px"><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"/></svg>
            </span>
          </div>
        </div>
        <div className='w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4  mt-[20px]'>
         <HeroCard />
         <Card id={0} value={"24.300"} label={"Total Earnings"} profit={true} spike={5.35}/>
         <Card id={1} value={"43"} label={"Pending Orders"} profit={false} spike={4.25}/>
         <Card id={2} value={"18.700"} label={"Total Revenue"} profit={true} spike={8.25}/>
        </div>
        <div className='mt-10 flex md:flex-row flex-col gap-4'>
            <div className='md:w-[60%] w-full'>
               <StackedBarChart />
            </div>
            <div className='md:w-[40%] w-full flex flex-col p-4 justify-start bg-white'>
              <h1>Weekly Revenue</h1>
              <PieChart />
              <div className='mt-3'>
                <RevenueTable />
              </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default App
