import { getCampaign, getCampaigns } from '../api';
import type { CampaignId } from '../types';

export const useGetCampaign = (id: CampaignId) => {
    return getCampaign(id);
};

export const useGetCampaigns = () => {
    return getCampaigns();
};
