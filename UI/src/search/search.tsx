import SearchForm from "./components/SearchForm";
import UserList from "./components/UserList";

export default function Search() {
    return (
        <>
            <h1>Поиск пользователей</h1>
            <SearchForm />
            <h2>Результаты GitHub:</h2>
            <UserList />
        </>
    );
}
