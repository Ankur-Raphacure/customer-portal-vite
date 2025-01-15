import React, { useState } from 'react'
import HArticle_2 from "../../assets/images/healtharticle/HArticle-2.png";
import HArticle_3 from "../../assets/images/healtharticle/HArticle_3.png";
import Msg from "../../assets/images/healtharticle/notification.png";
import dct from "../../assets/images/healtharticle/doctoreimg.png";
import { MainHealthCardStyled } from './MainHelthCard.style';

const MainHelthCard = () => {

    const [visibleCards, setVisibleCards] = useState(3);
    const cards = [
      {
        id: 1,
        title: "Complete Health care check up 1",
        description:
          "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      },
      {
        id: 2,
        title: "Complete Health care check up 2",
        description:
          "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis ",
      },
    ];
  
    const handleLoadMore = () => {
      setVisibleCards(visibleCards + 3);
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    };
  return (
    <MainHealthCardStyled>
      <div className="main-card">
        {cards.slice(0, visibleCards).map((card) => (
           <div>
           <div className="near-you-item">
             <div className=" cardstyle px-4 py-2 flex  flex-col">
               <div className="relative imgspace">
                 <img
                   src={HArticle_2}
                   alt="Health360"
                   className="w-full h-full object-cover rounded-t-xl w-xl"
                 />
               </div>
               <div className="mt-4">
                 <div className='bottom-name'>
                   <div className="d-flex ">
                    <div className="d-flex "> <img src={HArticle_3} alt="" /></div>
                    <div className='name-tag'>
                    <p className="text-sm">
                       {/* {title} */}
                       Syam varghese
                     </p>
                    </div>
                   
                    
                   </div>

                   <div className="d-flex">
                   <p className=''>20 Aug 2024</p>
                   <p className='name-tag'><img src={Msg} alt="" /> 10 comments</p>
                   </div>
                   
                 </div>
               </div>
             </div>
           </div>
           <h3>Navigating the Path to Wellness</h3>
           <p className='text-justify'>cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud</p>

         </div>
         
        ))}
      </div>

  
    </MainHealthCardStyled>
  )
}

export default MainHelthCard