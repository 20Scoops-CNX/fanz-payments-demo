import createRouteUrlProvider from 'utils/routeUrlProvider';

export const HOME = 'HOME';
export const ROOMS = 'ROOMS';
export const ROOM_DETAIL = 'ROOM_DETAIL';
export const RESULT = 'RESULT';
export const HOME_IBELSA = 'HOME_IBELSA';
export const ROOMS_IBELSA = 'ROOMS_IBELSA';
export const ROOM_DETAIL_IBELSA = 'ROOM_DETAIL_IBELSA';
export const RESULT_IBELSA = 'RESULT_IBELSA';

const routeUrlProvider = createRouteUrlProvider();

routeUrlProvider.set(HOME, '/');
routeUrlProvider.set(ROOMS, '/rooms');
routeUrlProvider.set(ROOM_DETAIL, '/rooms/:id');
routeUrlProvider.set(RESULT, '/:id/:result');
routeUrlProvider.set(HOME_IBELSA, '/ibelsa');
routeUrlProvider.set(ROOMS_IBELSA, '/ibelsa/rooms');
routeUrlProvider.set(ROOM_DETAIL_IBELSA, '/ibelsa/rooms/:id');
routeUrlProvider.set(RESULT_IBELSA, '/ibelsa/:id/:result');

export default routeUrlProvider;
