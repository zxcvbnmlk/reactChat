import {User} from "@src/_models/user.ts";

export interface SearchRequest {
    q: string;
    page: number;
};
export interface SearchUsersAction {
    type: string;
    payload: SearchRequest;
}

export interface SearchState {
    users: User[];
    loading: boolean;
    error: string | null;

}

export interface GitHubResponse {
    data: {
        incomplete_results: boolean,
        items: User[],
        total_count: number
    },
}
