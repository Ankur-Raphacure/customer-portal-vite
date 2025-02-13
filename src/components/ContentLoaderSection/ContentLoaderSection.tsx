import ContentLoader from "react-content-loader";
import { ContentLoaderSectionStyled } from "./ContentLoaderSection.styled";
const ContentLoaderSection = (props: any) => {
  const fromPage = props?.fromPage;
  const heightVal =
    fromPage === "followPage"
      ? 600
      : fromPage === "marketplaceliveauctions"
        ? 500
        : fromPage === "biddinginfo"
          ? 250
          : 775;
  const viewBoxVal =
    fromPage === "followPage"
      ? "0 0"
      : fromPage === "biddinginfo"
        ? "0 0 500 250"
        : "0 0 800 575";
  return (
    <>
      <ContentLoaderSectionStyled>
        <ContentLoader
          width={fromPage === "biddinginfo" ? 500 : 1300}
          height={heightVal}
          viewBox={viewBoxVal}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          className="loadingContent"
        >
          {fromPage === "doctorDetails" ? (
            <>
              <circle cx="472" cy="159" r="7" />
              <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
              <circle cx="472" cy="190" r="7" />
              <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
              <circle cx="472" cy="219" r="7" />
              <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
              <circle cx="472" cy="249" r="7" />
              <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
              <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
              <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
              <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
              <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
              <rect x="10" y="20" rx="0" ry="0" width="40" height="44" />
              <rect x="10" y="80" rx="0" ry="0" width="40" height="44" />
              <rect x="10" y="140" rx="0" ry="0" width="40" height="44" />
              <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
              <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
              <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
              <rect x="10" y="200" rx="0" ry="0" width="40" height="44" />
              <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
              <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
              <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
              <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
              <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
              <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
              <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
              <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
            </>
          ) : fromPage === "doctorsList" ? (
            <>
              <rect x="4" y="8" rx="3" ry="3" width="8" height="570" />
              <rect x="5" y="573" rx="3" ry="3" width="331" height="7" />
              <rect x="329" y="9" rx="3" ry="3" width="8" height="570" />
              <rect x="102" y="69" rx="3" ry="3" width="102" height="7" />
              <rect x="92" y="47" rx="3" ry="3" width="178" height="6" />
              <circle cx="48" cy="63" r="18" />
              <rect x="95" y="95" rx="3" ry="3" width="178" height="6" />
              <rect x="105" y="169" rx="3" ry="3" width="102" height="7" />
              <rect x="95" y="147" rx="3" ry="3" width="178" height="6" />
              <circle cx="51" cy="163" r="18" />
              <rect x="98" y="195" rx="3" ry="3" width="178" height="6" />
              <rect x="107" y="265" rx="3" ry="3" width="102" height="7" />
              <rect x="97" y="243" rx="3" ry="3" width="178" height="6" />
              <circle cx="53" cy="259" r="18" />
              <rect x="100" y="291" rx="3" ry="3" width="178" height="6" />
              <rect x="108" y="365" rx="3" ry="3" width="102" height="7" />
              <rect x="98" y="343" rx="3" ry="3" width="178" height="6" />
              <circle cx="54" cy="359" r="18" />
              <rect x="101" y="391" rx="3" ry="3" width="178" height="6" />
              <rect x="110" y="458" rx="3" ry="3" width="102" height="7" />
              <rect x="100" y="436" rx="3" ry="3" width="178" height="6" />
              <circle cx="56" cy="452" r="18" />
              <rect x="103" y="484" rx="3" ry="3" width="178" height="6" />
              <rect x="114" y="507" rx="3" ry="3" width="102" height="7" />
              <rect x="103" y="534" rx="3" ry="3" width="178" height="6" />
              <rect x="5" y="8" rx="3" ry="3" width="331" height="7" />
            </>
          ) : (
            <>
              <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
              <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
              <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
              <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
              <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
              <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
              <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
              <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
              <circle cx="286" cy="536" r="12" />
              <circle cx="319" cy="535" r="12" />
              <circle cx="353" cy="535" r="12" />
              <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
              <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
              <circle cx="210" cy="535" r="12" />
              <circle cx="428" cy="536" r="12" />
            </>
          )}
        </ContentLoader>
      </ContentLoaderSectionStyled>
    </>
  );
};

export default ContentLoaderSection;
