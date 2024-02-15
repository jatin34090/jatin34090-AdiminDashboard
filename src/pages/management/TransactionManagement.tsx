import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import { OrderItemType, OrderType } from "../../types"
import { Link } from "react-router-dom";


const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "qw34tytfds",
    quentity: 4,
    price: 2000,
  },
]

const TransactionManagement = () => {

  const [order, setOrder] = useState<OrderType>({
    name: "Jatin Gupta",
    address: "Milan Vihar",
    city: "Moradabad",
    state: "Uttar Pradesh",
    country: "India",
    pinCode: 244001,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharge: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "wertyuiokmnbvcxzasdfghjk"

  })

  const { name, address, city, state, country, pinCode, subtotal, shippingCharge, tax, discount, total, status } = order;

  const undateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }))
  }
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="management-container">

        <section style={{
          padding:'2rem',
        }}>
          <h2>Order Items</h2>
          {
            order.orderItems.map(i => (
              <ProductCard name={i.name} photo={i.photo} _id={i._id} quentity={i.quentity} price={i.price} />

            ))
          }

        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name:{name}</p>
          <p>Address:{`${address}, ${city}, ${state}, ${country} ${pinCode}`}</p>

          <h5>Amount Info</h5>
          <p>Subtotal:{subtotal}</p>
          <p>Shipping Charge:{shippingCharge}</p>
          <p>Tax:{tax}</p>
          <p>Discount:{discount}</p>
          <p>Total:{total}</p>

          <h5>Status Info</h5>
          <p>Status:{" "}
            <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"} >
              {status}
            </span>
          </p>
          <button onClick={undateHandler}>Process Order</button>

        </article>

      </main>
    </div>
  )
}


const ProductCard = ({ name, photo, price, quentity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`} key={_id}>{name}</Link>
    <span>₹{price} X {quentity} = ₹{price * quentity}</span>
  </div>
)

export default TransactionManagement