import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {connectSocket, sendMessage,disconnectSocket} from "@src/chat/slices/chatSlice.ts";

export default function Chat() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(connectSocket());

        return () => {
            dispatch(disconnectSocket());
        };
    }, [dispatch]);

    const handleSend = (text: string) => {
        dispatch(sendMessage(text));
    };

    return (
        <>
            <h1>Главная страница</h1>
            <p>Добро пожаловать!</p>
        </>
    );
}
