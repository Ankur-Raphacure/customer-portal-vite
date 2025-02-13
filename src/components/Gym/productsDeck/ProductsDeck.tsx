import React, { useRef, useState } from "react";
import { ProductDeckStyled } from "./ProductDeck.Styled";
import { Link } from "react-router-dom";

const ProductsDeck = ({ data, renderCard, heading = "product",padding=true,viewAllLink,background}: any) => {

  const scrollContainerRef = useRef(null) as any;
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction:any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <ProductDeckStyled>
        <div className={`product-deck-container ${background?"product-new-color":""} ${padding?" product-deck-container-padding":""}`}>
          <div className="deck-heading">
            <h3>{heading}</h3>
            {(viewAllLink ?? null) && <Link to={viewAllLink}>View All</Link>}
          </div>
          {
            data?.length===0
            ?
            (
              <>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px"}}>
                  <p>No data found</p>
                </div>
              </>
            )
            :
            (
              <div className="scroll-container">
                {/* {showLeftButton && (
                  <button
                    onClick={() => scroll('left')}
                    className="scroll-button"
                    aria-label="Scroll left"
                  >
                    {"<"}
                  </button>
                )} */}
                <div onScroll={handleScroll}  ref={scrollContainerRef} className="product-deck-div">
                  {data?.map((item: any, i: any) => {
                    return renderCard(item, i);
                  })}
                </div>
                {/* {showRightButton && (
                  <button
                    onClick={() => scroll('right')}
                    className="scroll-button right"
                    aria-label="Scroll right"
                  >
                    {">"}
                  </button>
                )} */}
              </div>
            )
          }
        </div>
      </ProductDeckStyled>
    </>
  );
};

export default ProductsDeck;
