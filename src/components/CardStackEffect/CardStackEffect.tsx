import React, { useRef } from "react";
import { CardStackEffectStyled } from "./CardStackEffect.styled";
import StackedCard from "./StackedCard";
import { useScroll } from "framer-motion";

const CardStackEffect = ({ origin = "self", data }: any) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  return (
    <CardStackEffectStyled>
      <main className="main" ref={container}>
        {data?.length > 0 &&
          data.map((item: any, i: any) => {
            const targetScale = 1 - (data?.length - i) * 0.05;
            console.log("targetScale : ", targetScale);

            return (
              <StackedCard
                key={`p_${i}`}
                i={i}
                item={item}
                origin={origin}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
      </main>
    </CardStackEffectStyled>
  );
};

export default CardStackEffect;
