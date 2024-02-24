import { AxiosError } from "axios";
import { ApiResponse, BaseApiResponse } from "./interface";
import axiosInstance from "@/lib/axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Rental, Vehicle } from "./vehichleServiceController";

export type userStatus = "notOwner" | "pending" | "isOwner";
const domainUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

export class userServiceController {
  public async isOwner(): Promise<ApiResponse<userStatus>> {
    const endpoint = "/api/v1/customer/isowner";
    try {
      const response = await axiosInstance.get(endpoint);
      return response;
    } catch (err: any) {
      const error: AxiosError<BaseApiResponse<any>> = err;
      throw error.response?.data;
    }
  }

  public async requestOwner(): Promise<ApiResponse<any>> {
    const endpoint = "/api/v1/customer/request/owner";
    try {
      const response = await axiosInstance.get(endpoint);
      return response;
    } catch (err: any) {
      const error: AxiosError<BaseApiResponse<any>> = err;
      throw error.response?.data;
    }
  }
}
