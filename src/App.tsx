import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Bar from "./pages/Charts/Bar";
import Pie from "./pages/Charts/Pie";
import Line from "./pages/Charts/Line";
import TransactionManagement from "./pages/management/TransactionManagement";
import NewProduct from "./pages/management/NewProduct";
import ProductManagement from "./pages/management/ProductManagement";
import Toss from "./pages/apps/Toss";
import Coupan from "./pages/apps/Coupan";
import StopWatch from "./pages/apps/StopWatch";



const Dashboard = lazy(() => import("./pages/Dashboard"))
const Products = lazy(() => import("./pages/Products"))
const Transaction = lazy(() => import("./pages/Transaction"))
const Customers = lazy(() => import("./pages/Customers"))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Link to="/admin/dashboard"><button>Visit Dashboard</button></Link>} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />



          {/* Charts */}
          <Route path="/admin/chart/bar" element={<Bar />} />
          <Route path="/admin/chart/pie" element={<Pie />} />
          <Route path="/admin/chart/line" element={<Line />} />

          
          {/* App */}
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupan" element={<Coupan />} />
          <Route path="/admin/app/toss" element={<Toss />} />


          {/* Managment */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />


        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;