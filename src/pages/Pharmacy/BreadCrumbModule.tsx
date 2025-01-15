import { useHistory } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BreadCrumbModuleStyled } from "./BreadCrumbModule.styled";
const BreadCrumbModule = (props: any) => {
  const {
    medicines,
    itemDetail,
    moduleName,
    itemModuleName,
    SelectedCategory,
    list,
  } = props;
  const history = useHistory();
  const gotoNewPage = (url: any) => {
    history.push(url);
  };
  return (
    <>
      <BreadCrumbModuleStyled>
        <div className="breadcrumb1-row">
          <span
            className="line-item-text"
            onClick={() => {
              gotoNewPage("/");
            }}
          >
            Home
          </span>

          {list?.map((item: any) => {
            return (
              <>
                <span className="line-item-dd">
                  <IoIosArrowForward />
                </span>
                <span
                  className="line-item-text"
                  onClick={() => {
                    gotoNewPage(item?.link);
                  }}
                >
                  {item?.title}
                </span>
              </>
            );
          })}
        </div>
      </BreadCrumbModuleStyled>
    </>
  );
};
export default BreadCrumbModule;
