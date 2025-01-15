import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getHealthCategoriesAPI,
  getHealthPackagesAPI,
  getAllTestsAPI,
  getPharmacyCategoriesAPI,
  getVendorDetailsAPI,
  getVendorPackageListAPI,
  getVendorTestListAPI,
  getLabTestsNearBy,
  getSimilarMedicinesAPI,
  getAllPackagesAPI,
  getAllCategoriesAPI,
  getAllActiveBodyPartAPI,
  getAllgetActiveScanTypeAPI,
  getAllBrandsAPI,
  getAllSubCategoriesAPI,
  getAllMedicineAPI,
  getAllTopMedicineAPI,
  getAllCompareMedicineAPI,
  getAllSaltCategoriesAPI,
  getOrdersCountByItem,
  getAllBrandedMedicineAPI,
  getAllWellnessMedicines,
  getDeliveryTimeByItemID,
  getAllFilteredPackages,
  getAllFilteredTests,
  getAllActiveTubes,
} from "./labtestService";

export interface LabTestState {
  loading: boolean;
  error: any;
  healthCategoriesList: any;
  healthPackagesList: any;
  allTestsList: any;
  allPackagesList: any;
  allNearByLabssList: any;
  allPharmacyCategoriesList: any;
  vendorDetails: any;
  vendorPackageList: any;
  vendorTestList: any;
  selectedTest: any;
  selectedPackage: any;
  allSimilarMedicinesList: any;
  allCategoriesList: any;
  allActiveBodyPartList: any;
  allgetActiveScanTypeList: any;
  allBrandsList: any;
  allSubCategoriesList: any;
  allMedicinesList: any;
  MedicinesCount: any;
  saltMedicinesCount: any;
  allCompareMedicineList: any;
  allTopMedicineList: any;
  allSaltCategoryList: any;
  ordersCountByItemDetails: any;
  allBrandedMedicineList: any;
  allWellnessMedicines: any;
  deliveryTimeData: any;
  allTubesList: any;
}
const userData: string | null = localStorage.getItem("user");
const initialState: LabTestState = {
  loading: false,
  error: null,
  healthCategoriesList: [],
  healthPackagesList: [],
  allTestsList: [],
  allPackagesList: [],
  allPharmacyCategoriesList: [],
  vendorDetails: [],
  vendorPackageList: [],
  vendorTestList: [],
  allSimilarMedicinesList: [],
  selectedTest: null,
  selectedPackage: null,
  allNearByLabssList: {},
  allCategoriesList: [],
  allActiveBodyPartList: [],
  allgetActiveScanTypeList: [],
  allBrandsList: [],
  allSubCategoriesList: [],
  allMedicinesList: [],
  MedicinesCount: 0,
  saltMedicinesCount: 0,
  allCompareMedicineList: [],
  allTopMedicineList: [],
  allSaltCategoryList: {},
  ordersCountByItemDetails: {},
  allBrandedMedicineList: [],
  allWellnessMedicines: [],
  deliveryTimeData: {},
  allTubesList: [],
};

export const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: LabTestState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: LabTestState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },

    updateSelectedlabtestDetails: (
      state: LabTestState,
      action: PayloadAction<any>
    ) => {
      state.selectedTest = { ...action.payload?.selectedTest };
      state.selectedPackage = { ...action.payload?.selectedPackage };
    },
  },
  extraReducers: (builder: any) => {
    //getHealthCategoriesAPI
    builder.addCase(getHealthCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHealthCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.healthCategoriesList = action.payload?.data;
      }
    );
    builder.addCase(
      getHealthCategoriesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.healthCategoriesList = [];
      }
    );
    //getHealthPackagesAPI
    builder.addCase(getHealthPackagesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHealthPackagesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.healthPackagesList = action.payload?.data;
      }
    );
    builder.addCase(
      getHealthPackagesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.healthPackagesList = [];
      }
    );
    //getAllTestsAPI
    builder.addCase(getAllTestsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllTestsAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allTestsList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllTestsAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allTestsList = [];
      }
    );
    //getAllPackagesAPI
    builder.addCase(getAllPackagesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllPackagesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allPackagesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllPackagesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allPackagesList = [];
      }
    );

    //getAllFilteredPackages
    builder.addCase(getAllFilteredPackages.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllFilteredPackages.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allPackagesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllFilteredPackages.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allPackagesList = [];
      }
    );

    //getAllFilteredTests
    builder.addCase(getAllFilteredTests.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllFilteredTests.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.MedicinesCount = action.payload.total;
        state.allTestsList = action?.payload;
      }
    );
    builder.addCase(
      getAllFilteredTests.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allTestsList = [];
      }
    );

    //getPharmacyCategoriesAPI
    builder.addCase(getPharmacyCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getPharmacyCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allPharmacyCategoriesList =
          action.payload?.data?.medicineCategories;
      }
    );
    builder.addCase(
      getPharmacyCategoriesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allPharmacyCategoriesList = [];
      }
    );
    // getVendorDetailsAPI
    builder.addCase(getVendorDetailsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getVendorDetailsAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.vendorDetails = action.payload?.data;
      }
    );
    builder.addCase(
      getVendorDetailsAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.vendorDetails = [];
      }
    );
    // getVendorPackageListAPI
    builder.addCase(getVendorPackageListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getVendorPackageListAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.vendorPackageList = action.payload?.data;
      }
    );
    builder.addCase(
      getVendorPackageListAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.vendorPackageList = [];
      }
    );
    // getVendorTestListAPI
    builder.addCase(getVendorTestListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getVendorTestListAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.vendorTestList = action.payload?.data;
      }
    );
    builder.addCase(
      getVendorTestListAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.vendorTestList = [];
      }
    );
    //allNearByLabssList
    builder.addCase(getLabTestsNearBy.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getLabTestsNearBy.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allNearByLabssList = action.payload?.data;
      }
    );
    builder.addCase(
      getLabTestsNearBy.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allNearByLabssList = {};
      }
    );
    //allSimilarMedicinesList
    builder.addCase(getSimilarMedicinesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getSimilarMedicinesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allSimilarMedicinesList = action.payload?.data;
      }
    );
    builder.addCase(
      getSimilarMedicinesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allSimilarMedicinesList = {};
      }
    );

    //getAllCategoriesAPI
    builder.addCase(getAllCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allCategoriesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllCategoriesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allCategoriesList = {};
      }
    );
    //getAllActiveBodyPartAPI
    builder.addCase(getAllActiveBodyPartAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllActiveBodyPartAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allActiveBodyPartList = action.payload.data?.data;
      }
    );
    builder.addCase(
      getAllActiveBodyPartAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allActiveBodyPartList = [];
      }
    );
    //getAllgetActiveScanTypeAPI
    builder.addCase(getAllgetActiveScanTypeAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllgetActiveScanTypeAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allgetActiveScanTypeList = action.payload;
      }
    );
    builder.addCase(
      getAllgetActiveScanTypeAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allgetActiveScanTypeList = [];
      }
    );

    //getAllActiveTubes
    builder.addCase(getAllActiveTubes.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllActiveTubes.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allTubesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllActiveTubes.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allTubesList = {};
      }
    );

    //getAllBrandsAPI
    builder.addCase(getAllBrandsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllBrandsAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allBrandsList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllBrandsAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allBrandsList = {};
      }
    );

    //getAllSubCategoriesAPI
    builder.addCase(getAllSubCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllSubCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allSubCategoriesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllSubCategoriesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allSubCategoriesList = {};
      }
    );

    //getAllMedicinesAPI
    builder.addCase(getAllMedicineAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllMedicineAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        const page = (action as any)?.meta?.arg?.page - 1;
        const count = (action as any)?.meta?.arg?.count;
        let data =
          page == 0 ? [] : state.allMedicinesList.slice(0, page * count);
        state.error = null;
        state.loading = false;
        state.MedicinesCount = action.payload.total;
        state.allMedicinesList = [...data, ...action?.payload?.data];
      }
    );
    builder.addCase(
      getAllMedicineAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allMedicinesList = [];
      }
    );
    //getAllTopMedicineAPI
    builder.addCase(
      getAllTopMedicineAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allTopMedicineList = action?.payload?.data;
      }
    );
    //getAllBrandedMedicineAPI
    builder.addCase(
      getAllBrandedMedicineAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allBrandedMedicineList = action?.payload?.data;
      }
    );
    //getAllCompareMedicineAPI
    builder.addCase(getAllCompareMedicineAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllCompareMedicineAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        const page = (action as any)?.meta?.arg?.page - 1;
        const count = (action as any)?.meta?.arg?.count;
        let data =
          page == 0 ? [] : state.allMedicinesList.slice(0, page * count);
        state.error = null;
        state.loading = false;
        state.allCompareMedicineList = action.payload.data?.data;
      }
    );
    builder.addCase(
      getAllCompareMedicineAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allCompareMedicineList = [];
      }
    );

    //getAllSaltCategoriesAPI
    builder.addCase(
      getAllSaltCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.allSaltCategoryList = action?.payload?.data;
      }
    );
    //getAllSaltCategoriesAPI
    builder.addCase(
      getOrdersCountByItem.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.ordersCountByItemDetails = action?.payload;
      }
    );
    //getAllWellnessMedicines
    builder.addCase(
      getAllWellnessMedicines.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.allWellnessMedicines = action?.payload;
      }
    );
    //
    builder.addCase(
      getDeliveryTimeByItemID.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.deliveryTimeData = action?.payload;
      }
    );
    //
  },
});

export const { setLoading, updateErrorMessage, updateSelectedlabtestDetails } =
  authSlice.actions;

export default authSlice.reducer;
