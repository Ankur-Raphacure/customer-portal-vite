import { PackageQuantityStyled } from "./PackageQuantity.styled";

import { ReactComponent as Circle } from "../../../../assets/icons/circle.svg";
import { ReactComponent as AddIcon } from "../../../../assets/icons/plus.svg";
import { ReactComponent as RemoveIcon } from "../../../../assets/icons/minus.svg";

const PackageQuantityBtn = (props: any) => {
  const { item, index } = props;

  return (
    <PackageQuantityStyled>
      <div className="package_qcontainer">
        <button
          onClick={() => {
            props.removeToReview(item);
          }}
          className="minus-quantity"
        >
        <div className="minus_icon">
          <Circle />
          <RemoveIcon />
        </div>
        </button>
        <div className="current-quantity">{'01'}</div>
        <button
          disabled={true}
          onClick={() => {
            console.log('plus');
          }}
          className="plus-quantity"
        >
          <div className="plus_icon">
            <Circle />
            <AddIcon />
          </div>
        </button>
      </div>
    </PackageQuantityStyled>
  );
};

export default PackageQuantityBtn;