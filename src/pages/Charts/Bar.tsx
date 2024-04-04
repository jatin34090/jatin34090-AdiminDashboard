import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"Aug","Sep","Oct","Nov","Dec"];



const Bar = () => {
  return (
    <div className="admin-container">
      {/* Sidebar  */}
      <AdminSidebar />
      {/* Main */}
      <main className="chart-container" >
        <h1>Bar Charts</h1>
        <section>
          <BarChart data_1={[300, 144, 433, 655, 237, 755, 190]} data_2={[200, 444, 343, 556, 990, 778, 455]} title_1="Products" title_2="Users" bgColor_1={`hsl(260,50%,30%)`} bgColor_2={`hsl(360,90%,90%)`}/>
          <h2>Top Selling Products & Top Customers</h2>

        </section>
        <section>
          <BarChart horizontal={true} data_1={[300, 144, 433, 655, 237, 755, 190,200, 444, 343, 556, 990]} data_2={[]} title_1="Products" title_2="" bgColor_1={`hsl(260,50%,30%)`} bgColor_2=""  labels={months}  />
          <h2>Order throughout the year</h2>

        </section>
      </main>
    </div>
  )
}

export default Bar