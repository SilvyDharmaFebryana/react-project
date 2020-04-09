import React from 'react'

const ProductCart = (props) => {

    const { productData } = props
    const { nama, harga, desc, discount, stock } = productData

    const itemProduct = () => {
        if (stock) {
            return (
                <div>
                    <h3>Nama Product : {nama}</h3>
                    <h4>Harga: {harga}</h4>
                    {
                        discount > 0 ? (
                            <h4>discount {discount}% : {(discount / 100) * harga}</h4>
                        ) : null
                    }
                    <h3>stock : {stock}</h3>
                    <p>Deskripsi : {desc}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Nama Product : {nama}</h3>
                    <h4 style={{ color: 'red'}}>Stock kosong</h4>
                </div>
            )

        }
    }

    return (
        <div
            style={{
                marginTop: '8px',
                marginLeft: '500px',
                width: '250px',
                padding: '4px',
                border: '3px solid grey',

                borderRadius: '8px'
            }}>

            {itemProduct()}

        </div>
    )
}

export default ProductCart