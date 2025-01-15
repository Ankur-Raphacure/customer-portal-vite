import React from 'react'
import { ProductDeckStyled } from './ProductDeck.Styled'
import { Link } from 'react-router-dom'

const ProductsDeck = ({data,renderCard,heading="product"}:any) => {

  return (
    <>
        <ProductDeckStyled>
            <div className='product-deck-container'>
                <div className='deck-heading'>
                    <h3>{heading}</h3>
                    {data?.viewAllLink ?? <Link to={data?.viewAllLink}>View All</Link>}
                </div>
                <div className='product-deck-div'>
                    {
                        data?.map((item:any,i:any)=>{
                            return(
                                 renderCard(item,i)
                            )
                        })
                    }
                </div>
            </div>
        </ProductDeckStyled>
    </>
  )
}

export default ProductsDeck