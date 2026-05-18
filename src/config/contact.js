const schedulingOrderNumber = import.meta.env.VITE_SCHEDULING_ORDER_NUMBER ?? '';
const callingNumber = import.meta.env.VITE_CALLING_NUMBER ?? '';
const queryNumber = import.meta.env.VITE_QUERY_NUMBER ?? '';

const scheduleMessage = encodeURIComponent(
  'Hello RS Fabricare, I would like to schedule an order.'
);
const queryMessage = encodeURIComponent(
  'Hello RS Fabricare, I have a query regarding your services. Please assist me.'
);

export const contactLinks = {
  scheduling: schedulingOrderNumber
    ? `https://wa.me/${schedulingOrderNumber}?text=${scheduleMessage}`
    : '#contact',
  query: queryNumber ? `https://wa.me/${queryNumber}?text=${queryMessage}` : '#contact',
  calling: callingNumber ? `tel:+${callingNumber}` : '#contact',
  email: 'mailto:rsfabricare@gmail.com',
};

export const contactInfo = {
  email: 'rsfabricare@gmail.com',
  hours: 'Mon - Sat, 9:00 AM - 7:00 PM',
};
