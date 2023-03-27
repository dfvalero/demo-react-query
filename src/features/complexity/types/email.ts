export type EmailImageBlock = {
    id: string;
    type: 'IMAGE';
    image: string;
    link?: string;
    altText?: string;
};

export type EmailTextBlock = {
    id: string;
    type: 'TEXT';
    title?: string;
    text: string;
};

type EmailBlock = EmailImageBlock | EmailTextBlock;

export type Email = {
    blocks: EmailBlock[];
};
