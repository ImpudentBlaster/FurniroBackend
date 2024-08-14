import React, { useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ShopProducts() {

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

  const navigate = useNavigate();
  function handleClick(item) {

    navigate('/Product', { state: { product: item } });
  }

  return (
    <div className="shopProducts">

      {
        products.length === 0 ? <h1>Loading...</h1> : products.map(item => (
          <>
            <div className="shopProducts-card" onClick={() => handleClick(item)}>
              {item.prodBubble ? (
                <div className={item.prodBubble === "New" ? "bubble new" : "bubble"}>
                  {item.prodBubble}
                </div>
              ) : (
                ""
              )}
              <img className="img-fluid" src={`http://localhost:5000/${item.img}`} />
              <div className="prod-des">
                <ul>
                  <li>{item.prodName}</li>
                  <li>{item.prodDesc}</li>
                  <li>
                    {item.prodPrice}{" "}
                    <span
                      style={{
                        color: "#B0B0B0",
                        fontSize: "1rem",
                        textDecoration: "line-through",
                        fontWeight: "400",
                      }}
                    >
                      {item.prodRedPrice ? item.prodRedPrice : ""}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ))
      }
    </div>
  );
}

export default ShopProducts;
