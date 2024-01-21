import AnimatedNumber from "react-animated-number";
import { useTranslation } from "next-i18next";

const Stats = () => {
  const { t } = useTranslation("services");
  return (
    <>
      <div className="">
        <div className="items-container justify-center gap-6 lg:justify-between">
          <Item number={500} title={t("stats1")} symbol="+" />
          <Item number={400} title={t("stats2")} symbol="+" />
          <Item number={98} title={t("stats3")} symbol="%" />
        </div>
      </div>

      <style jsx>{`
        section {
          background-color: var(--clr-neutral-100);
          color: var(--clr-secondary);
          text-align: start;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .items-container {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default Stats;
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Item = ({ number, title, symbol }) => {
  const { ref, inView } = useInView();
  const [n, setN] = useState(0);

  useEffect(() => {
    inView && setN(number);
  }, [inView]);
  return (
    <>
      <div
        ref={ref}
        style={{ textAlign: "center" }}
        className={
          "f-ai-c item   z-20  flex-col justify-center gap-3 rounded-xl bg-white p-8  px-12 shadow-xl macbook:p-16 macbook:px-24"
        }
      >
        <div
          style={{
            fontSize: "4.2rem",
            fontWeight: "bold",
            color: "var(--clr-primary)",
          }}
          className="f-ai-c gap-1"
        >
          <AnimatedNumber
            value={n}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 70 && percentage < 90 ? { opacity: 0.5 } : {}
            }
            duration={1200}
          />
          <p className="text-6xl">{symbol}</p>
        </div>

        <p
          className="text-center font-medium tracking-wide text-light	"
          style={{
            fontSize: " 140%",
          }}
        >
          {title}
        </p>
      </div>
      <style jsx>{`
        .viewport-block {
          display: none;
        }
      `}</style>
    </>
  );
};
