import { PackagereviewStyled } from "./PackageReview.styled";
import Toast from "react-bootstrap/Toast";

const PackageReview = (props: any) => {
  return (
    <PackagereviewStyled>
      {props.labBookingList && props.labBookingList.length > 0 && (
        <div className="fixed-bottom py-2">
          <Toast className="toast_container" show={props.showReview}>
            <Toast.Body>
              <div className="review_datalist">
                {props.labBookingList && props.labBookingList.length && (
                  <div className="review_datas flex_start">
                    {props.labBookingList.map((testData: any) => {
                      return (
                        <>
                          <div className="review_data">
                            <div className="review_content">
                              <div className="review_text poppins-medium">
                                {testData?.service_name}
                              </div>
                              <div className="review_price poppins-medium">
                                {(testData?.price?.discounted_price).toFixed(
                                  2
                                ) ?? "0.00"}
                              </div>
                            </div>
                            <div className="review_deleteactions">
                              <button
                                className="review_deletebtn"
                                onClick={() => props.handleTestRemove(testData)}
                              >
                                <span className="review_delelteicon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      d="M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z"
                                      fill="#FA1A1A"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="review_actions">
                <button
                  className="next-btn poppins-semibold"
                  onClick={() => props.redirectToReview()}
                >
                  Next
                </button>
              </div>
            </Toast.Body>
          </Toast>
        </div>
      )}
    </PackagereviewStyled>
  );
};

export default PackageReview;
