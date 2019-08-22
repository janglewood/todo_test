import { SET_IS_USER_LOADING } from "./constants";
import { SET_IS_PROFILES_LOADING } from "./constants";

export const setIsUserLoading = (isLoading) => ({
	type: SET_IS_USER_LOADING,
	isLoading,
});
export const setIsProfilesLoading = (isLoading) => ({
	type: SET_IS_PROFILES_LOADING,
	isLoading,
});