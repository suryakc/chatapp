export const messages = [
  {
    id: '1000',
    message: 'Hello!',
    created: new Date(Date.now() - 60 * 1000 * 1000),
    from_id: '2',
  },
  {
    id: '1001',
    message: 'Hello world!',
    created: new Date(Date.now() - 50 * 60 * 1000 * 1000),
    from_id: '3',
  },
  {
    id: '1002',
    message: 'Bonjour!',
    created: new Date(Date.now() - 40 * 1000 * 1000),
    from_id: '4',
  },
  {
    id: '1004',
    message: 'Guten Tag!',
    created: new Date(Date.now() - 30 * 1000 * 1000),
    from_id: '5',
  },
];

export const conversations = [
  {
    id: '2',
    name: 'Bruce Wayne',
    image: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    last_message: messages.find(m => '2' === m.from_id),
  },
  {
    id: '3',
    name: 'Clark Kent',
    image: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
    last_message: messages.find(m => '3' === m.from_id),
  },
  {
    id: '4',
    name: 'Diana Prince',
    image: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
    last_message: messages.find(m => '4' === m.from_id),
  },
  {
    id: '5',
    name: 'Kara Danvers',
    image: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
    last_message: messages.find(m => '5' === m.from_id),
  },
];
