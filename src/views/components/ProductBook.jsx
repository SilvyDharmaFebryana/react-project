import React from 'react';
import './Book.css';
import './bootstrap.css';

const ProductBook = (props) => {

    const { dataBook } = props
    const { author, title, review, desc, price, discount, image, stock } = dataBook
    let diskon = (1 - discount / 100) * price
    let hasil = diskon.toFixed(2)

    return (
        <div className="row content ml-4" >
            <div className="col-lg-4 col-md-7 text-center p-3 ">
                <img src={image} alt="" />
            </div>

            <div className="col-lg-6 col-md-5 text-center p-3">

                <div style={{ flex: "1" }} className="d-flex flex-column">
                    <p className="author">{author}</p>
                </div>

                <div style={{ flex: "1" }} className="d-flex flex-column">
                    <h2 className="title">{title}</h2>
                </div>

                <div style={{ flex: "1" }} className="d-flex flex-column">
                    <p className="review">{review} / 5 Review</p>
                </div>

                <div style={{ flex: "1" }} className="d-flex flex-column">
                    <p className="desc">{desc}</p>
                </div>

                <div style={{ flex: "1" }} className="d-flex flex-column">
                    {
                        discount > 0 ? (
                            <div className="row">
                                <div className="col-lg-4 col-md-7 text-center p-3">
                                    <h3 className="hasil" style={{ textAlign: 'left' }}>$ {hasil}</h3>
                                </div>
                                <div className="col-lg-5 col-md-7 text-center p-3">
                                    <h3 className="diskon" style={{ textAlign: 'left' }}>$ {price}</h3>
                                </div>
                            </div>
                        ) :
                            <div className="row">
                                <div className="col-lg-5 col-md-7 text-center p-3">
                                    <h3 className="price" style={{ textAlign: 'left' }}>$ {price}</h3>
                                </div>
                                <div className="col-lg-5 col-md-7 text-center p-3">
                                    <h3></h3>
                                </div>
                            </div>
                    }
                </div>

                <div style={{ flex: "1" }} className="d-flex flex-column">
                    {
                        stock > 0 ? (
                            <input type="button" value="BUY NOW" className="buttonBuy" style={{ textAlign: 'center' }} />
                        ) : <input type="button" value="BUY NOW" className="buttonDis" style={{ textAlign: 'center' }} disabled />

                    }
                </div>
            </div>
            <div className="col-lg-3 col-md-7 text-center p-3"></div>
            <div className="col-lg-3 col-md-7 text-center p-3"></div>
        </div>
    )
}

export default ProductBook