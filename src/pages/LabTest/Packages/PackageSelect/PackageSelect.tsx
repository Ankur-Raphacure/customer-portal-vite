import { useEffect, useState } from "react";
import { PackageSelectStyled } from "./PackageSelect.styled";
import { BestPackagesStyled } from "../../BestPackages/BestPackages.styled";

import PackageTestList from "../PackageTestList/PackageTestList";
import PackageList from "../PackageList/PackageList";
import DetailsPopup from "../../BestPackages/DetailsPopup";

const PackageSelect = (props: any) => {
  console.log(props.testList, "12");

  const [tabValue, setTabsValue] = useState(0);
  const [showTestDetails, setShowTestDetails] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [showDetailsMap, setShowDetailsMap] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    setTabsValue(props?.landToPackage);
  }, [props?.landToPackage]);

  const toggleShowDetails = (index: number) => {
    setShowDetailsMap((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <PackageSelectStyled>
      <div className="content_container">
        <div className="content_tabNav">
          {props.tabsList?.map((item: any, index: any) => {
            return (
              <button
                className={
                  index === tabValue
                    ? "content_tabNav_item selected"
                    : "content_tabNav_item"
                }
                onClick={() => setTabsValue(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
        {tabValue === 0 && (
          <>
            {/* {props.testList && props.testList.tests?.length > 0 && (
              <div className="testslist_container">
                {props.testList.tests?.map((testData: any) => {
                  const isAddedtoList = props.labBookingList.findIndex(
                    (testData2: any) =>
                      testData2?.service_code === testData.service_code
                  );
                   const handleShowDetails = (service_code: any) => {
                    setSelectedTest(service_code);
                  };
                  return (
                    <>
                      <PackageTestList
                        isAddedtoList={isAddedtoList}
                        testData={testData}
                        testaddToReview={props.testaddToReview}
                        testRemoveToReview={props.testRemoveToReview}
                        setShowTestDetails={setShowTestDetails}
                        setShowTestDetails={() =>
                          handleShowDetails(testData.service_code)
                        }
                      />
                      {showTestDetails && (
                        <BestPackagesStyled>
                          <DetailsPopup
                            item={testData}
                            onClose={() => setShowTestDetails(false)}
                          />
                        </BestPackagesStyled>
                      )}
                    </>
                  );
                })}
              </div>
            )} */}

            {props.testList && props.testList.tests?.length > 0 && (
              <div className="testslist_container">
                {props.testList.tests?.map((testData: any) => {
                  const isAddedtoList = props.labBookingList.findIndex(
                    (testData2: any) =>
                      testData2?.service_code === testData.service_code
                  );

                  const handleShowDetails = (service_code: any) => {
                    setSelectedTest(service_code);
                  };

                  return (
                    <div key={testData.service_code}>
                      <PackageTestList
                        isAddedtoList={isAddedtoList}
                        testData={testData}
                        testaddToReview={props.testaddToReview}
                        testRemoveToReview={props.testRemoveToReview}
                        setShowTestDetails={() =>
                          handleShowDetails(testData.service_code)
                        }
                      />
                      {selectedTest === testData.service_code && (
                        <BestPackagesStyled>
                          <DetailsPopup
                            item={testData}
                            onClose={() => setSelectedTest(null)}
                          />
                        </BestPackagesStyled>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {!props.testList || props.testList.tests?.length === 0 ? (
              <div className="error_testlist">
                <p className="error_text">
                  {props.searchText
                    ? `No Results found for \`${props.searchText}\``
                    : "Tests are currently unavailable!"}
                </p>
              </div>
            ) : null}
          </>
        )}

        {tabValue === 1 && (
          <div className="packageslist_container">
            {props.packagesList &&
              props.packagesList.packages?.length > 0 &&
              props.packagesList.packages?.map(
                (packageData: any, index: any) => {
                  const showDetails = showDetailsMap[index] || false;
                  const isAddedtoList = props.labBookingList.findIndex(
                    (packageData2: any) =>
                      packageData2?.service_code === packageData.service_code
                  );
                  return (
                    <>
                      <PackageList
                        isAddedtoList={isAddedtoList}
                        indexKey={index}
                        package={packageData}
                        packageaddToReview={props.testaddToReview}
                        packageRemoveToReview={props.testRemoveToReview}
                        toggleShowDetails={toggleShowDetails}
                      />
                      {showDetails && (
                        <DetailsPopup
                          item={packageData}
                          fromPackage={true}
                          onClose={() => toggleShowDetails(index)}
                        />
                      )}
                    </>
                  );
                }
              )}
            {!props.packagesList ||
            props.packagesList.packages?.length === 0 ? (
              <div className="error_packagelist">
                <p className="error_text">
                  {props.searchText
                    ? `No Results found for \`${props.searchText}\``
                    : "Packages are currently unavailable!!"}
                </p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </PackageSelectStyled>
  );
};

export default PackageSelect;
