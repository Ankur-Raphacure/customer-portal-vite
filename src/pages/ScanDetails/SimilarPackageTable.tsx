import React, { useEffect, useState } from "react";
import { Table, Badge, Accordion } from "react-bootstrap";
import { BsCheckLg, BsXLg, BsChevronDown } from "react-icons/bs";
import { SimilarTableStyled } from "./SimilarTable.styled";
import { useHistory } from "react-router-dom";

interface Price {
  actual_cost: number;
  discount_percentage: number;
  discounted_price: number;
}

interface Test {
  service_code: string;
  service_name: string;
  visit_type: string | null;
}

interface Package {
  matching_tests: number;
  service_name: string;
  service_code: string;
  price: Price;
  tests: Test[];
  visit_type: string | null;
  created_at: string;
  image: string[];
}

interface SimilarPackageTableProps {
  packages: Package[];
  currentItem: Package;
  type: "test" | "package";
}

const SimilarPackageTable: React.FC<SimilarPackageTableProps> = ({
  packages,
  currentItem,
  type,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const history = useHistory();
  // Combine currentItem with packages
  const allPackages = [currentItem, ...packages];

  // Extract all unique tests from all packages including current item
  const allTests = Array.from(
    new Set(
      allPackages
        ?.flatMap((pkg) => pkg?.tests)
        .map((test) => test?.service_code)
    )
  )
    .map((testCode) => {
      const test = allPackages
        .flatMap((pkg) => pkg?.tests)
        .find((t) => t?.service_code === testCode);
      return test;
    })
    .filter((test): test is Test => test !== undefined);

  // Check if a test exists in a package
  const isTestInPackage = (testCode: string, packageTests: Test[]) => {
    return packageTests?.some((test) => test?.service_code === testCode);
  };
  const [fieldName, setFieldName] = useState<string>("Package");

  useEffect(() => {
    setFieldName(type === "test" ? "Test" : "Package");
  }, [type]);

  const getColumnHeader = (index: number) => {
    if (index === 0) return `This ${fieldName}`;
    return `${fieldName} ${index}`;
  };

  useEffect(() => {
    console.log("allPackages : ", allPackages);
  }, [allPackages]);

  return (
    <SimilarTableStyled>
      <div className="similar-package-container">
        <h2 className="table-title">Compare With Similar {fieldName}s</h2>
        <Table responsive className="comparison-table">
          <thead>
            <tr>
              <th>{fieldName} Details</th>
              {allPackages?.map((pkg, index) => (
                <th key={index}>{getColumnHeader(index)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>
                  {pkg?.image && pkg?.image?.length > 0 && pkg?.image[0] ? (
                    <img
                      src={pkg?.image[0]}
                      alt={pkg?.service_name}
                      className="package-image"
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td>Name</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>
                  <div className="package-title">{pkg?.service_name}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td>Price</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>
                  <div className="price-wrapper">
                    <div className="badge-wrapper">
                      <Badge className="discount-badge">
                        -{pkg?.price?.discount_percentage}%
                      </Badge>
                      <span className="current-price">
                        ₹{pkg?.price?.discounted_price}
                      </span>
                    </div>
                    <span className="original-price">
                      MRP: <span>₹{pkg?.price?.actual_cost}</span>
                    </span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td>Report Within</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>0 Minutes</td>
              ))}
            </tr>
            <tr>
              <td>Distance</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>{`0 Km`}</td>
              ))}
            </tr>
            <tr>
              <td>Next Slot</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>N/A</td>
              ))}
            </tr>
            <tr>
              <td>Instant Consult</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>N/A</td>
              ))}
            </tr>
            <tr>
              <td>Collection Type</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>{pkg?.visit_type?.toUpperCase() || "N/A"}</td>
              ))}
            </tr>
            <tr>
              <td>Parameters</td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>{pkg?.matching_tests} Parameters</td>
              ))}
            </tr>
            <tr>
              <td></td>
              {allPackages?.map((pkg, index) => (
                <td key={index}>
                  <button
                    className="btn similar-package-add-btn"
                    onClick={() => {
                      if (type === "test") {
                        history.push(`/labTestDetils/${pkg?.service_code}`);
                      } else if (type === "package") {
                        history.push(`/labPackageDetils/${pkg?.service_code}`);
                      }
                    }}
                  >
                    Add
                  </button>
                </td>
              ))}
            </tr>
            {currentItem?.matching_tests > 0 && (
              <tr>
                <td colSpan={allPackages?.length + 1}>
                  <Accordion className="tests-accordion">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Tests</Accordion.Header>
                      <Accordion.Body>
                        <Table className="tests-table">
                          <thead>
                            <tr>
                              <th>Test Name</th>
                              {allPackages?.map((pkg, index) => (
                                <th key={index}>{pkg?.service_name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {allTests?.map((test) => (
                              <tr key={test?.service_code}>
                                <td>{test?.service_name}</td>
                                {allPackages?.map((pkg, pkgIndex) => (
                                  <td key={pkgIndex}>
                                    {isTestInPackage(
                                      test?.service_code,
                                      pkg?.tests
                                    ) ? (
                                      <BsCheckLg className="check-icon" />
                                    ) : (
                                      <BsXLg className="cross-icon" />
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </SimilarTableStyled>
  );
};

export default SimilarPackageTable;
