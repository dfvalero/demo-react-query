export type TextMessage = {
    id: string;
    type: 'TEXT';
    text: string;
};

export type MediaMessage = {
    id: string;
    type: 'MEDIA';
    url: string;
    altText?: string;
    isVideo: boolean;
};

type Message = TextMessage | MediaMessage;

export type Chat = {
    userId: string;
    messages: Message[];
};
