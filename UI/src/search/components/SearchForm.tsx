import {useCallback, useState} from "react";
import { useDispatch } from "react-redux";
import { searchUsersRequest } from "@src/search/slices/searchSlice.ts";
import {SearchRequest} from "@src/search/models/search.ts";
import debounce from "lodash.debounce";



export default function SearchForm() {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearch =  useCallback(
        debounce((value: string) => {
            const valueFormat: string = value.trim();
            if (valueFormat && valueFormat.length > 2) {
                const requestPayload: SearchRequest = { q: valueFormat, page: 1 };
                dispatch(searchUsersRequest(requestPayload));
            }
        }, 1000),
        [dispatch]
    );

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    handleSearch(e.target.value);
                }}
                placeholder="Введите имя пользователя"
            />

        </div>
    );
}
