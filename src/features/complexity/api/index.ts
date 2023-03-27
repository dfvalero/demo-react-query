import type { Campaign, CampaignId } from '../types';

const fakePushData: Campaign['pushData'] = [
    {
        title: 'Kesarito Profile',
        message: 'Exploring the Boundless Possibilities of AI',
        link: 'https://cesar.cafe/',
    },
];

const fakeEmailData: Campaign['emailData'] = [
    {
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Frontendez Profile',
                text: 'Music and Tech | Música i Tecnologia',
            },
            {
                id: '2',
                type: 'IMAGE',
                image: 'https://pbs.twimg.com/profile_images/918553320574382081/1qvfosZd_400x400.jpg',
                link: 'https://twitter.com/frontendez',
                altText: 'Bearded guy',
            },
        ],
    },
];

const fakeChatData: Campaign['chatData'] = [
    {
        userId: '1',
        messages: [
            { id: '1', type: 'TEXT', text: 'The electric city!' },
            {
                id: '2',
                type: 'MEDIA',
                url: 'https://i.pinimg.com/originals/ad/d5/d3/add5d38fc15e3deab69c225fda998292.jpg',
                altText: 'Michael and Dwight wearing ski caps',
                isVideo: false,
            },
            {
                id: '3',
                type: 'MEDIA',
                url: 'https://www.youtube.com/embed/-xbeQ5ziyXM',
                altText: 'The Office - The electric city',
                isVideo: true,
            },
        ],
    },
];

const campaigns: Record<CampaignId, Campaign> = {
    1: {
        id: '1',
        name: 'Push Bumble',
        campaignType: 'PUSH',
        project: 'BUMBLE',
        pushData: fakePushData,
        emailData: [],
        chatData: [],
    },
    2: {
        id: '2',
        name: 'Push Badoo',
        campaignType: 'PUSH',
        project: 'BADOO',
        pushData: fakePushData,
        emailData: [],
        chatData: [],
    },
    3: {
        id: '3',
        name: 'Email Bumble',
        campaignType: 'EMAIL',
        project: 'BUMBLE',
        pushData: [],
        emailData: fakeEmailData,
        chatData: [],
    },
    4: {
        id: '4',
        name: 'Email Badoo',
        campaignType: 'EMAIL',
        project: 'BADOO',
        pushData: [],
        emailData: fakeEmailData,
        chatData: [],
    },
    5: {
        id: '5',
        name: 'Chat Bumble',
        campaignType: 'CHAT',
        project: 'BUMBLE',
        pushData: [],
        emailData: [],
        chatData: fakeChatData,
    },
    6: {
        id: '6',
        name: 'Chat Badoo',
        campaignType: 'CHAT',
        project: 'BADOO',
        pushData: [],
        emailData: [],
        chatData: fakeChatData,
    },
};

export const getCampaign = (id: CampaignId): Campaign | undefined => {
    return campaigns[id];
};

export const getCampaigns = () => Object.values(campaigns);
