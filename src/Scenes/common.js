export const getTotalAmount = (cartItems) => {
  var totalAmount = 0;
  cartItems.map((itemCard, indexItem) => {
    var itemPrice = itemCard?.quantity * itemCard?.priceList[0]?.price;
    totalAmount = totalAmount + itemPrice;
  });
  return totalAmount;
};
export const getUserDeliveryTime = (deliveryTimeData, userPincode) => {
  var totalAmount = 1;
  if (deliveryTimeData?.data?.length > 0 && userPincode) {
    deliveryTimeData?.data?.map((item) => {
      if (item?.pincodes?.includes(parseInt(userPincode))) {
        totalAmount = item?.delivary_time;
        return;
      }
    });
  }

  return totalAmount;
};
export const getProductPrice = (product) => {
  console.log("product2", product);
  var totalAmount = "---";
  const userData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  if (userData) {
    console.log("userData", userData);
    product?.priceList.map((itemp) => {
      if (
        itemp?.city == userData?.data?.city &&
        itemp?.client == userData?.data?.companyName
      ) {
        totalAmount =
          itemp?.price + "(" + itemp?.discount + "%) / " + product?.priceType;
      }
    });
  }

  return totalAmount;
};
export const handleAddtoCard = (categoryName, item) => {
  // const raphaCartL = localStorage.getItem("raphaCart");
  // const prevItems = raphaCartL ? JSON.parse(raphaCartL) : [];
  // prevItems.push({ ...item, categoryName });
  // localStorage.setItem("raphaCart", prevItems);
};

export const parseAddress = (place, addressStr) => {
  const selectedAddress = addressStr?.split(",") ?? [];
  console.log("place?.address_components", place?.address_components);
  return {
    address1: selectedAddress[0],
    address2: "",
    city:
      place?.address_components?.filter((a) =>
        a?.types?.includes("locality"),
      )[0]?.long_name ||
      selectedAddress[1] ||
      "",
    state:
      place?.address_components?.filter((a) =>
        a?.types?.includes("administrative_area_level_1"),
      )[0]?.long_name ||
      selectedAddress[2] ||
      "",
    country:
      place?.address_components?.filter((a) => a?.types?.includes("country"))[0]
        ?.long_name ||
      selectedAddress[3] ||
      "",
    zipcode:
      place?.address_components?.filter((a) =>
        a?.types?.includes("postal_code"),
      )[0]?.long_name || "",
  };
};
export const checkIsMobile = () => {
  return window.innerWidth <= 768;
};
export const gotoLoginPage = () => {
  var userC = localStorage.getItem("userCity");
  const userC1 = userC ? userC : "";
  localStorage.clear();
  localStorage.setItem("userCity", userC1);
  window.location.href = "/";
};
export const getFormatedAddress = (address1, isdesktop) => {
  let forrAddres = address1?.zip
    ? `${address1?.address1}, ${address1?.city}, ${address1?.zip}`
    : address1?.address1
      ? `${address1?.address1}, ${address1?.city}`
      : address1?.city;
  if (isdesktop) {
    forrAddres = address1?.zip
      ? `${address1?.city}, ${address1?.zip}`
      : address1?.city;
  }
  return forrAddres;
};
export const getAttachmentIds = (seName) => {
  const raphaPrescriptionsL = localStorage.getItem("raphaPrescriptions");
  const prevItems = raphaPrescriptionsL ? JSON.parse(raphaPrescriptionsL) : {};
  console.log("seName", seName);
  console.log("prevItems", prevItems);
  const prevItemsCat =
    prevItems && prevItems?.[seName] ? prevItems?.[seName] : [];
  if (prevItemsCat?.length > 0) {
    let listids = [];
    prevItemsCat.map((iitmmd) => {
      if (iitmmd?.attachment_id) {
        listids.push(iitmmd?.attachment_id);
      }
    });
    return listids;
  } else {
    return null;
  }
};

export const htmlTemplate = async (data) => {
  const logoUrl = "#";

  const calculateAge = (dob) => {
    if (!dob) return null;
    const diff = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const attachment = data?.attachments?.[0]; // Only consider the first attachment
  const medicines = attachment?.prescriptions_medicines || [];
  const tests = attachment?.prescriptions_tests || [];

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Report</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
      }

      h3 {
          margin-top: 1rem;
      }

      .table-div {
          box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.10);
          border-radius: 2px;
          width: 100%;
          height: 100%;
          background-color: #fff;
          padding: 1rem;
      }

      .container {
          width: 800px;
          margin: 20px auto;
          background-color: #fff;
          border: 1px solid #ddd;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      @media screen and (max-width: 700px) {
          .container {
              width: 100%;
          }
      }

      .header,
      .footer {
          text-align: center;
          padding: 10px 0;
      }

      .header img {
          width: 50px;
          height: 50px;
      }

      .content {
          margin: 20px 0;
      }

      .table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
      }

      .table th,
      .table td {
          border: 1px solid #9747FF;
          padding: 8px;
          text-align: center;
      }

      .table th {
          background-color: #f2f2f2;
      }

      .notes {
          background-color: white;
          box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.1) inset;
          padding: 7px;
          border: 1px solid #ddd;
          margin: inherit;
      }

      .signature {
          text-align: right;
          margin-top: 20px;
      }

      .pt-details {
          display: flex;
          justify-content: space-between;
      }

      .footer {
          display: flex;
          justify-content: space-between;
      }
  </style>
</head>

<body>

  <div class="container">
      <div class="header">
          <img src=${logoUrl} alt="RaphaCure" style="height: 8vh; width: auto; float: right;">
          <div style="display: flex; flex-direction: column; align-items: flex-start; margin-left: 1rem; margin-top: 1rem;">
              <h2 id="dr">Dr. ${data?.doctor?.name || "N/A"}</h2>
              <p style="margin-top: -1rem; margin-left: 1rem;">${
                data?.doctor?.specialization || "N/A"
              }</p>
              <p style="margin-top: -3rem; margin-left: 1rem;">${
                data?.type || "N/A"
              }</p>
          </div>
      </div>

      <div class="content">
          <div class="pt-details">
              <div>
                  <p><strong>Booked for:</strong> ${
                    data?.user?.first_name || "N/A"
                  }</p>
                  <p><strong>Age:</strong> ${
                    calculateAge(data?.user?.dob) || "N/A"
                  }</p>
                  <p><strong>Gender:</strong> ${data?.user?.gender || "N/A"}</p>
                  <p><strong>Email:</strong> ${data?.user?.email || "N/A"}</p>
              </div>
              <div>
                  <p><strong>Consultation Date:</strong> ${
                    data?.collection_1_date || "N/A"
                  }</p>
                  <p><strong>Time Slot:</strong> ${
                    data?.collection_1_slot || "N/A"
                  }</p>
                  <p><strong>Phone:</strong> ${data?.user?.phone || "N/A"}</p>
              </div>
          </div>

          <div class="table-div">
              <h3>Medicine Prescribed</h3>
              <table class="table">
                  <thead>
                      <tr>
                          <th>SlNo</th>
                          <th>Brand</th>
                          <th>Dosage</th>
                          <th>Frequency</th>
                          <th>No of Days</th>
                          <th>Intake</th>
                          <th>Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${medicines
                        .map(
                          (medicine, index) => `
                          <tr>
                              <td>${index + 1}</td>
                              <td>${
                                medicine?.medicine?.service_name || "N/A"
                              }</td>
                              <td>${medicine?.dosage || "N/A"}</td>
                              <td>${medicine?.frequency || "N/A"}</td>
                              <td>${medicine?.no_of_days || "N/A"}</td>
                              <td>${medicine?.intake || "N/A"}</td>
                              <td>${
                                medicine?.medicine?.price?.actual_cost || "N/A"
                              }</td>
                          </tr>
                      `,
                        )
                        .join("")}
                  </tbody>
              </table>
          </div>

          <div class="table-div">
              <h3>Tests Recommended</h3>
              <table class="table">
                  <thead>
                      <tr>
                          <th>SlNo</th>
                          <th>Test Name</th>
                          <th>Diagnosis</th>
                          <th>Symptoms</th>
                          <th>Next Visit</th>
                          <th>Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${tests
                        .map(
                          (test, index) => `
                          <tr>
                              <td>${index + 1}</td>
                              <td>${test?.test?.service_name || "N/A"}</td>
                              <td>${test?.diagnosis || "N/A"}</td>
                              <td>${test?.symptoms || "N/A"}</td>
                               <td>${
                                 test?.next_visit
                                   ? new Date(
                                       test.next_visit,
                                     ).toLocaleDateString()
                                   : "N/A"
                               }</td>
                              <td>${
                                test?.test?.price?.actual_cost || "N/A"
                              }</td>
                          </tr>
                      `,
                        )
                        .join("")}
                  </tbody>
              </table>
          </div>

          <div class="notes">
              <h4>Notes</h4>
              <p>${attachment?.symptoms || "N/A"}</p>
          </div>
      </div>

      <div class="footer">
          <div>
              <p>123/4, 6th cross, road, opp, Thomas square, HSR Extension, VISAKHAP<br>
                  High school, Techno hub Bengaluru, Karnataka 560102<br>
                  +91 9555616032<br>
                  <a href="mailto:wellness@raphacure.com">wellness@raphacure.com</a></p>
          </div>
          <div class="signature">
              <p>Signature: ________________________</p>
          </div>
      </div>
  </div>

</body>

</html>`;
};

// Reusable function to truncate text
export const truncateText = (text, maxLength) => {
  if (!text) return "N/A"; // Handle missing text
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const getToken = () => {
  const accessToken =
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user")) &&
    JSON.parse(localStorage.getItem("user"))?.accessToken
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : undefined;
  return accessToken;
};

export function formatStatus(status) {
  if (!status) {
    return "N/A";
  }
  return status
    ?.toLowerCase()
    ?.split("_")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ?.join(" ");
}

export const decryptWyhData = async (encryptedStr) => {
  const baseUrl = "https://aalizwell.in/api";
  const decryptionResponse = await fetch(
    `${baseUrl}/EncryptDecrypt/RSADecrypt`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ str: [encryptedStr] }),
    },
  );

  const decryptionData = await decryptionResponse.json();

  if (
    !decryptionData?.success ||
    decryptionData?.data?.length === 0 ||
    !decryptionData?.data[0]?.decryptedStr
  ) {
    console.error("Decryption failed or invalid response", decryptionData);
    return;
  }

  const decryptedStr = decryptionData.data[0].decryptedStr;
  console.log("Decrypted String: ", decryptedStr);
  return decryptedStr;
};

export function formatDate(dateString) {
  if (!dateString) return "N/A";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    const [year, month, day] = dateString.split("-");
    const monthIndex = parseInt(month) - 1;

    if (
      isNaN(monthIndex) ||
      monthIndex < 0 ||
      monthIndex >= 12 ||
      !year ||
      !month ||
      !day
    ) {
      return "N/A";
    }

    const monthName = months[monthIndex];
    return `${parseInt(day)} ${monthName} ${year}`;
  } catch (error) {
    return "N/A";
  }
}
export const generateDates = () => {
  const today = new Date();

  return Array.from({ length: 10 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);

    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(date.getDate()).padStart(2, "0")}`;
  });
};
export const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
