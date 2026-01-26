import axios, { AxiosError } from "axios";

// import { router } from "@/providers/RouterProvider";
// import { AuthService } from "@/services/AuthService";
// import { promiseWithCache } from "@/utils/promise-with-cache";

// import { AuthCache } from "./AuthCache";

export const $http = axios.create({
  baseURL: "http://localhost:3333",
});

// $http.interceptors.request.use((configs) => {
//   // const token = AuthCache.getTokenAA();

//   // if (!token) {
//   //   throw new Error("Token not found");
//   // }

//   // configs.headers.set("Authorization", `Bearer ${token}`);

//   return configs;
// });

// $http.interceptors.response.use(undefined, async (error) => {
//   // if (error instanceof AxiosError) {
//   //   const isUnauthorized = error.status && [401, 403].includes(error.status);
//   //   if (isUnauthorized) {
//   //     const { isExpired } = await promiseWithCache(
//   //       "token-validation",
//   //       () => AuthService.getAATokenInfo(AuthCache.getTokenAA()!),
//   //       {
//   //         ttl: 1,
//   //       },
//   //     );
//   //     if (isExpired) {
//   //       router.navigate({
//   //         to: "/auth/logout",
//   //         replace: true,
//   //       });
//   //       return;
//   //     }
//   //   }
//   // }
// });

$http.interceptors.request.use((config) => {
  console.log("➡️ REQUEST", config.url, config.data);
  return config;
});

$http.interceptors.response.use(
  (response) => {
    console.log("✅ RESPONSE", response.status, response.data);
    return response;
  },
  (error) => {
    console.log("❌ ERROR", error.response?.status, error.response?.data);
    throw error;
  }
);
