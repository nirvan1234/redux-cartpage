import React from 'react'

function Home(props) {
    console.warn(props.data);
    return (
        <div>
          
            <h1>Home Component</h1>
            <div className="add-to-cart">
    <span className="cart-count"></span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart img" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.imgbin.com/0/19/6/mobile-app-icon-virtual-reality-icon-T6zUx7ck.jpg" alt="mobile img"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler({price:1000,name:'i phone 11'})
                    }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home