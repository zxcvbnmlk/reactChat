export interface Message {
    text: string;
    sender: string;
    timestamp: string;
}

export interface User {
    id: string;
    username: string;
}


export interface ChatState {
    users: User[];
    messages: Message[];
    loading: boolean;
}
