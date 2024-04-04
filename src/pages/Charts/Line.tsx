import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Charts"
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"Aug","Sep","Oct","Nov","Dec"];

const Line = () => {
  return (
    <div className="admin-container">
      {/* Sidebar  */}
      <AdminSidebar />
      {/* Main */}
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart data={[300, 144, 433, 655, 237, 755, 190, 300, 144, 433, 655, 237]}
            label="Users" backgroundColor="rgb(53,162,255)" borderColor="rgba(53,162,255,0.5)" labels={months}/>
          <h2>Active Users</h2>

        </section>
        <section>
          <LineChart data={[400, 60, 244, 100, 143, 75, 120, 41, 47, 50, 56, 32]}
            label="Product" backgroundColor="hsla(269,80%,40%,0.4)" borderColor="hsl(269,80%,40%)" labels={months}/>
          <h2>Total Product</h2>

        </section>
        <section>
          <LineChart data={[30000, 14400, 43300, 65500, 23700, 75500, 19000, 30000, 14400, 43003, 65500, 23700]}
            label="Revenue" backgroundColor="rgba(129,162,255,0.4)" borderColor="rgb(53,162,255)" labels={months}/>
          <h2>Total Revenue</h2>

        </section>
        <section>
          <LineChart data={[30000, 14400, 43300, 65500, 23700, 75500, 19000, 30000, 14400, 43003, 65500, 23700]}
            label="Discount" backgroundColor="rgba(29,62,55,0.4)" borderColor="rgb(53,162,255)" labels={months}/>
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  )
}

export default Line