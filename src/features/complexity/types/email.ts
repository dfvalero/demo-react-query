type EmailImageBlock = {
    image: string;
    link?: string;
    altText?: string;
};

type EmailTextBlock = {
    title?: string;
    text: string;
};

type EmailBlock = EmailImageBlock | EmailTextBlock;

export type Email = {
    blocks: EmailBlock[];
};
