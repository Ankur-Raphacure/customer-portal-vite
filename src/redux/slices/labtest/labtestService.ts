import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, patch, get } from "../../../library/Requests/helpers";

import {
  healthCategories,
  labtestPackages,
  pharmacyCategories,
  constructVendorDetailsQuery,
  constructVendorPackageListQuery,
  constructVendorTestListQuery,
  getNearByLabTest,
  medicinesQuery,
  SimilarMedicinesQuery,
} from "../../../Scenes/graphqlConfig";

export const getHealthCategoriesAPI = createAsyncThunk(
  "auth/getHealthCategoriesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(healthCategories)),
);

export const getHealthPackagesAPI = createAsyncThunk(
  "auth/getHealthPackagesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(labtestPackages)),
);

export const getVendorDetailsAPI = createAsyncThunk(
  "auth/getVendorDetailsAPI",
  async (id: string) =>
    await post(`${SERVER_IP}/graphql`, constructVendorDetailsQuery(id)),
);

export const getVendorPackageListAPI = createAsyncThunk(
  "labtest/getVendorPackageListAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructVendorPackageListQuery(obj)),
);

export const getVendorTestListAPI = createAsyncThunk(
  "hospital/getHospitalDoctorsListAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructVendorTestListQuery(obj)),
);

export const getAllTestsAPI = createAsyncThunk(
  "auth/getAllTestsAPI",
  async (body: any) => {
    // Build query dynamically based on input
    const filters = [
      `page: ${body?.page}`,
      `count: ${body?.count}`,
      `type: "${body?.type}"`,
      body?.city ? `city: "${body?.city}"` : "",
      body?.searchText ? `searchText: "${body?.searchText}"` : "",
      body?.startPrice ? `startPrice: ${body?.startPrice || null}` : "",
      body?.endPrice ? `endPrice: ${body?.endPrice || null}` : "",
      body?.discountEnd ? `discountEnd: ${body?.discountEnd || null}` : "",
      body?.discountStart
        ? `discountStart: ${body?.discountStart || null}`
        : "",
      body?.sort ? `sort: "${body?.sort}"` : "",
    ]
      .filter(Boolean) // Remove empty or undefined parts
      .join(", ");

    // GraphQL query
    const query = `
        testCount(
          city: "${body?.city || ""}",
          searchText: "${body?.searchText || ""}",
          type: "${body?.type || ""}",
          startPrice: ${body?.startPrice ?? null},
          endPrice: ${body?.endPrice ?? null},
          discountStart: ${body?.discountStart ?? null},
          discountEnd: ${body?.discountEnd ?? null}
        ),
        tests(${filters}) {
          service_code,
          service_name,
          fasting,
          image,
          type,
          price {
            actual_cost,
            discount_percentage,
            discounted_price
          },
          visit_type
        }
    `;

    // Make POST request to the server
    const response = await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify({
        query: `{ ${query} }`,
      }),
    );

    return response;
  },
);

export const getAllPackagesAPI = createAsyncThunk(
  "auth/getAllPackagesAPI",
  async (body: any) => {
    // Build query dynamically based on input
    const filters = [
      `page: ${body?.page}`,
      `count: ${body?.count}`,
      body?.city ? `city: "${body?.city}"` : "",
      body?.searchText ? `searchText: "${body?.searchText}"` : "",
      body?.startPrice ? `startPrice: ${body?.startPrice || null}` : "",
      body?.endPrice ? `endPrice: ${body?.endPrice || null}` : "",
      body?.discountEnd ? `discountEnd: ${body?.discountEnd || null}` : "",
      body?.discountStart
        ? `discountStart: ${body?.discountStart || null}`
        : "",
      body?.sort ? `sort: "${body?.sort}"` : "",
    ]
      .filter(Boolean) // Remove empty or undefined parts
      .join(", ");

    // GraphQL query
    const query = `
        packageCount(
          searchText: "${body?.searchText || ""}",
          startPrice: ${body?.startPrice ?? null},
          endPrice: ${body?.endPrice ?? null},
          discountStart: ${body?.discountStart ?? null},
          discountEnd: ${body?.discountEnd ?? null},
          is_corporate: false
        ),
        packages(${filters}, is_corporate: false) {
          service_code,
          service_name,
          visit_type,
          description,
          preperation,
          type,
          price {
            actual_cost,
            discount_percentage,
            discounted_price
          },
          sort,
          image,
          tests {
            service_code,
            service_name,
            fasting,
            type,
            price {
              actual_cost,
              discount_percentage,
              discounted_price
            },
            visit_type
          },
          vendors {
            id,
            name,
            address,
            city,
            zip,
            type,
            price {
              actual_cost,
              discount_percentage,
              discounted_price
            }
          }
        }
    `;

    // Make POST request to the server
    const response = await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify({
        query: `{ ${query} }`,
      }),
    );

    return response;
  },
);

export const getPharmacyCategoriesAPI = createAsyncThunk(
  "auth/getPharmacyCategoriesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(pharmacyCategories)),
);

export const getAllMedicinesAPI = createAsyncThunk(
  "auth/getAllMedicinesAPI",
  async (medicineObj: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(
        medicinesQuery(
          medicineObj?.searchText,
          medicineObj?.category,
          medicineObj?.count,
          medicineObj?.page,
          medicineObj?.selectedRecomonded,
          medicineObj?.discStart,
          medicineObj?.discEnd,
          medicineObj?.startPrice,
          medicineObj?.endPrice,
        ),
      ),
    ),
);

export const getSimilarMedicinesAPI = createAsyncThunk(
  "auth/getSimilarMedicinesAPI",
  async (Obj: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(SimilarMedicinesQuery(Obj?.medicineId)),
    ),
);
export const getLabTestsNearBy = createAsyncThunk(
  "auth/getLabTestsNearBy",
  async (city: any) =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getNearByLabTest(city))),
);

export const checkExpressBook = createAsyncThunk(
  "auth/checkExpressBook",
  async (body: any) =>
    await patch(
      `${SERVER_IP}/api/v1/vendor/${body.vendorId}/instant`,
      body.data,
    ),
);

export const getAllCategoriesAPI = createAsyncThunk(
  "auth/getAllCategoriesAPI",
  async (body: any) => {
    const extraPram =
      body?.count && body?.count > 0 ? `&count=${body?.count}` : "";
    return await get(
      `${SERVER_IP}/api/v1/category/getActiveCategories?section_name=${body?.sectionName}${extraPram}`,
    );
  },
);
export const getAllActiveBodyPartAPI = createAsyncThunk(
  "auth/getAllActiveBodyPartAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/getActiveBodyPart`, body),
);
export const getAllgetActiveScanTypeAPI = createAsyncThunk(
  "auth/getAllgetActiveScanTypeAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/getActiveScanType`, body),
);
export const getAllBrandsAPI = createAsyncThunk(
  "auth/getAllBrandsAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/medicine/brands`, body),
);
export const getAllSubCategoriesAPI = createAsyncThunk(
  "auth/getAllSubCategoriesAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/category/getActiveCategories?section_name=pharmacy`,
    ),
);

export const getAllSaltCategoriesAPI = createAsyncThunk(
  "auth/getAllSaltCategoriesAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/category/getActiveCategories?section_name=pharmacy&salt_category=true`,
    ),
);

export const getAllMedicineAPI = createAsyncThunk(
  "auth/getAllMedicineAPI",
  async (body: any) => {
    const body1 = { ...body, status: "active" };
    return await post(`${SERVER_IP}/api/v1/medicine/getmedicines`, {
      filters: body1,
    });
  },
);
export const getAllWellnessMedicines = createAsyncThunk(
  "auth/getAllWellnessMedicines",
  async (body: any) => {
    const body1 = { ...body, status: "active" };
    return await post(`${SERVER_IP}/api/v1/medicine/getmedicines`, {
      filters: body1,
    });
  },
);
export const getAllTopMedicineAPI = createAsyncThunk(
  "auth/getAllTopMedicineAPI",
  async (body: any) => {
    const body1 = { ...body, status: "active" };
    return await post(`${SERVER_IP}/api/v1/medicine/getmedicines`, {
      filters: body1,
    });
  },
);

export const getAllBrandedMedicineAPI = createAsyncThunk(
  "auth/getAllBrandedMedicineAPI",
  async (body: any) => {
    const body1 = { ...body, status: "active" };
    return await post(`${SERVER_IP}/api/v1/medicine/getmedicines`, {
      filters: body1,
    });
  },
);

export const getAllCompareMedicineAPI = createAsyncThunk(
  "auth/getAllCompareMedicineAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/medicine/salt`, { filters: body }),
);
export const getDeliveryTimeByItemID = createAsyncThunk(
  "auth/getDeliveryTimeByItemID",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/vendor/delivery-time?vendor_ids=${body?.vendor_ids}`,
    ),
);
export const getOrdersCountByItem = createAsyncThunk(
  "auth/getOrdersCountByItem",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/booking/ordersCountByItem`, body),
);

export const getAllFilteredPackages = createAsyncThunk(
  "labtest/getAllFilteredPackages",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/package/getPackages`, {
      ...body,
      filters: {
        ...body.filters,
        status: "active",
      },
    }),
);

export const getAllFilteredTests = createAsyncThunk(
  "package/getAllFilteredTests",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/get-all-tests`, {
      ...body,
      filters: {
        ...body.filters,
        active_status: "active",
      },
    }),
);

export const getAllActiveTubes = createAsyncThunk(
  "package/getAllActiveTubes",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/getActiveTubeNames`, body),
);

export const getAllSimilarTests = createAsyncThunk(
  "labtest/getAllSimilarTests",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/test/similar?test_code=${id}`),
);

export const getAllSimilarPackages = createAsyncThunk(
  "package/getAllSimilarPackages",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/package/similar?package_code=${id}`),
);

export const getAllPkgVendorsAPI = createAsyncThunk(
  "package/getAllPkgVendorsAPI",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/package/get-vendors-by-package/${id}`),
);

export const getPackageDetailsAPI = createAsyncThunk(
  "package/getPackageDetailsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/package/getPackageDetails`, body),
);

export const getTestDetailsAPI = createAsyncThunk(
  "test/getTestDetailsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/getTestDetails`, body),
);
