const USERURL = 'https://randomuser.me/api/?results=10&nat=us';

export const API = {
  search: () => fetch(USERURL),
};

// Try axios next
