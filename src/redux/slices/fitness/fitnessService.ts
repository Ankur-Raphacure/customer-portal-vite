import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get, patch } from "../../../library/Requests/helpers";

export const getFitnessCentersDataAPI = createAsyncThunk(
  "fitness/getFitnessCentersDataCenters",
  async ({ id }: any) => {
    const url = `${SERVER_IP}/api/v1/fitnessCenter/getAllFitnesscenters?id=${id}`;

    return await get(url);
  }
);

export const getAllFitnessCategoriesAPI = createAsyncThunk(
  "category/getAllCategoriesAPI",
  async (prop: { page?: number; count?: number; section_name: any }) =>
    await get(
      `${SERVER_IP}/api/v1/category?page=${prop?.page ?? 1}&count=${
        prop?.count || 10
      }&section_name=fitness`
    )
);

export const getAllFitnessCentersAPI = createAsyncThunk(
  "fitness/getAllFitnessCenters",
  async (body: any) => {

    const url = `${SERVER_IP}/api/v1/fitnessCenter/fitnessCenterFilters`

    return await post(url,body);
  }
);

export const createNewFitnessCenterAPI = createAsyncThunk(
  "fitness/createNewFitnessCenter",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/fitnessCenter`, body);
  }
);

export const getAllFitnessVendorsAPI = createAsyncThunk(
  "fitness/getAllFitnessVendors",
  async ({ page, count,status }: any) => {
    const queryParams = new URLSearchParams();

    if (page) queryParams.append("page", page?.toString());
    if (count) queryParams.append("count", count?.toString());
    if(status) queryParams.append("status",status?.toString())

    const url = `${SERVER_IP}/api/v1/fitnessCenter/getAllFitnessVendors?${queryParams.toString()}`;

    return await get(url);
  }
);

export const getAllFitnessCenterPackagesAPI = createAsyncThunk(
  "fitness/getAllFitnessCentersPackagesAPI",
  async ({ page=1, count=100000 ,parent_id,searchText}: any) => {
    const payload = {
      filters:{
        page,
        count,
        parent_id,
        ...(searchText ? {searchText} : {} )
      }
    };
    const url = `${SERVER_IP}/api/v1/package/getPackages`;

    return await post(url,payload);
  }
);

export const getAllFitnessTrainersAPI =  createAsyncThunk(
  "fitness/getAllFitnessTrainersAPI",
  async(body:any)=>{
    return post(`${SERVER_IP}/api/v1/trainer/getTrainers`,body)
  }
)