export function getUsers(state) {
   return state.usersReducer.users;
}
export function getPageSize(state) {
   return state.usersReducer.pageSize;
}
export function getTotalUsersCount(state) {
   return state.usersReducer.totalUsersCount;
}
export function getCurrentPage(state) {
   return state.usersReducer.currentPage;
}
export function getIsFetching(state) {
   return state.usersReducer.isFetching;
}
export function getFollowingInProgress(state) {
   return state.usersReducer.followingInProgress;
}