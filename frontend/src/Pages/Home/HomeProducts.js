import React, { useEffect, useState } from "react";
import img1 from "../../Assets/Images/image 1.png";
import img2 from "../../Assets/Images/image 2 (1).png";
import img3 from "../../Assets/Images/image 3.png";
import img4 from "../../Assets/Images/image 4.png";
import img5 from "../../Assets/Images/Image 5.png";
import img6 from "../../Assets/Images/image 6.png";
import img7 from "../../Assets/Images/image 7.png";
import img8 from "../../Assets/Images/image 8.png";
import axios from 'axios'

import { Link, useNavigate } from "react-router-dom";
const data = [
  {
    src: img1,
    name: "Slytherine",
    des: "Stylish cafe chair",
    price: "Rp 2.500.000",
    redPrice: "Rp 3.500.000",
    bubble: "-30%",
  },
  {
    src: img2,
    name: "Leviosa",
    des: "Stylish cafe chair",
    price: "Rp 2.500.000",
    redPrice: false,
    bubble: false,
  },
  {
    src: img3,
    name: "Lolito",
    des: "Luxury big sofa",
    price: "Rp 7.000.000",
    redPrice: "Rp 14.000.000",
    bubble: "-50%",
  },
  {
    src: img4,
    name: "Respira",
    des: "Outdoor bar table and stool",
    price: "Rp 500.000",
    redPrice: false,
    bubble: "New",
  },
  {
    src: img5,
    name: "Grifo",
    des: "Night lamp",
    price: "Rp 1.500.000",
    redPrice: false,
    bubble: false,
  },
  {
    src: img6,
    name: "Muggo",
    des: "Small mug",
    price: "Rp 150.000",
    redPrice: false,
    bubble: "New",
  },
  {
    src: img7,
    name: "Pingky",
    des: "Cute bed set",
    price: "Rp 7.000.000",
    redPrice: "Rp 14.000.000",
    bubble: "-50%",
  },
  {
    src: img8,
    name: "Potty",
    des: "Minimalist flower pot",
    price: "Rp 500.000",
    redPrice: false,
    bubble: "New",
  },
];
function HomeProducts() {
  const [products, setProducts] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('http://localhost:5000/products/show')
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  }, [])
console.log(products)

  const navigate = useNavigate();
  function handleProductClick(item) {
    console.log(item)
    navigate('/Product', { state: { product: item } });
  }
  return (
    <>
      {
        products.length === 0 ? <h1>Loading....</h1> : (
          products.map((item) => (
            <>

              <div className="products" onClick={() => handleProductClick(item)}>
                {item.prodBubble ? (
                  <div className={item.prodBubble === "New" ? "bubble new" : "bubble"}>
                    {item.prodBubble}
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <img className="img-fluid" src={`http://localhost:5000/${item.img}`} />
                </div>
                <div className="prod-des">
                  <ul>
                    <li>{item.prodName}</li>
                    <li>{item.prodDesc}</li>
                    <li>
                      {item.prodPrice}
                      <span
                        style={{
                          color: "#B0B0B0",
                          fontSize: "1rem",
                          textDecoration: "line-through",
                          fontWeight: "400",
                        }}
                      >
                        {item.prodRedPrice}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

            </>
          ))
        )
      }

      {/* {data.map((item) => (
        <>
       
          <div className="products" onClick={()=>handleProductClick(item)}>
            {item.bubble ? (
              <div className={item.bubble === "New" ? "bubble new" : "bubble"}>
                {item.bubble}
              </div>
            ) : (
              ""
            )}
            <div>
              <img className="img-fluid" src={item.src} />
            </div>
            <div className="prod-des">
              <ul>
                <li>{item.name}</li>
                <li>{item.des}</li>
                <li>
                  {item.price}
                  <span
                    style={{
                      color: "#B0B0B0",
                      fontSize: "1rem",
                      textDecoration: "line-through",
                      fontWeight: "400",
                    }}
                  >
                    {item.redPrice}
                  </span>
                </li>
              </ul>
            </div>
          </div>
         
        </>
      ))} */}
    </>
  );
}

export default HomeProducts;
