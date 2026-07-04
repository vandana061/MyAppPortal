export interface ServiceCategory {
  title: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'GST and Other Indirect Tax',
    services: [
      'GST Registration',
      'GST Filing',
      'GST Cancellation and Revocation',
      'GST Login Portal',
      'HSN Code Finder',
      'Indirect Tax',
    ],
  },
  {
    title: 'Changes In Limited Liability Partnership',
    services: ['Changes to LLP Agreement', 'Add Designated Partner', 'Close the LLP'],
  },
  {
    title: 'Accounting & Tax',
    services: [
      'Accounting and Book-keeping',
      'TDS Return Filing',
      'Income Tax Assessment',
      'Virtual CFO',
      'ITR for LLP',
      'Corporate Tax',
    ],
  },
  {
    title: 'Convert Your Business',
    services: ['Proprietorship to Pvt Ltd Company', 'Compliance Check - Secretarial Audit', 'Due Diligence'],
  },
  {
    title: 'Trademark',
    services: [
      'Trademark Registration',
      'Trademark Search',
      'Respond to TM Objection',
      'Trademark Renewal',
      'Trademark Assignment',
      'Well Known Trademark',
    ],
  },
  {
    title: 'Copyright',
    services: ['Copyright Registration', 'Copyright Music', 'Close the LLP'],
  },
  {
    title: 'Design Registration',
    services: ['Design Registration', 'Logo Design', 'ITR for LLP'],
  },
  {
    title: 'Important Registration',
    services: ['GST Registration', 'MSME Registration', 'MSME Udyam Renewal', 'PSARA (Private Security Agency)', 'IEC Renewal'],
  },
  {
    title: 'Startup India',
    services: ['DPIIT', '80IAC', 'GEM'],
  },
];
