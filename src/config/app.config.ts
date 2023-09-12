interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Guardian User'],
  customerRoles: [],
  tenantRoles: ['Student User', 'Guardian User'],
  tenantName: 'Guardian',
  applicationName: 'odyssey ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Guardian User account',
    'Add Student User',
    "View child's progress",
    'Delete Guardian User account',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e8dc5063-d22d-4a1e-8182-0f796458045f',
};
