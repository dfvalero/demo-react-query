type TextMessage = {
    id: string;
    text: string;
};

type MediaMessage = {
    id: string;
    url: string;
    alt: string;
    isVideo: boolean;
};

type Message = TextMessage | MediaMessage;

export type Chat = {
    userId: string;
    messages: Message[];
};
