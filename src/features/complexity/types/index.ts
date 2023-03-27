import type { Push } from './push';
import type { Email } from './email';
import type { Chat } from './chat';

export type CampaignId = string;

type CampaignType = 'PUSH' | 'EMAIL' | 'CHAT';

type Project = 'BUMBLE' | 'BADOO';

export type Campaign = {
    id: CampaignId;
    name: string;
    campaignType: CampaignType;
    project: Project;
    pushData: Push[];
    emailData: Email[];
    chatData: Chat[];
};
