import { USER_LIST_TYPE } from "./constants";

export type UsersInViewType = {
  username: string;
  is_broadcaster: boolean;
  distance: number;
}[];

export default function listUsersInView(
  users: USER_LIST_TYPE,
  positionX: number,
  positionY: number,
  screenWidth: number,
  screenHeight: number
) {
  const usersInView: UsersInViewType = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE

  if (screenHeight <= 0 || screenWidth <= 0) return [];
  const viewportTop = positionY - screenHeight / 2;
  const viewportBottom = positionY + screenHeight / 2;
  const viewportLeft = positionX - screenWidth / 2;
  const viewportRight = positionX + screenWidth / 2;

  for (const [key, value] of Object.entries(users)) {
    const topBound = value.y - 125 / 2;
    const bottomBound = value.y + 125 / 2;
    const leftBound = value.x - 50 / 2;
    const rightBound = value.x + 50 / 2;

    // If this condition is true, at least a portion of the peer avatar
    // is in view. 

    if (
      topBound <= viewportBottom &&
      rightBound >= viewportLeft &&
      leftBound <= viewportRight &&
      bottomBound >= viewportTop
    ) {

      // Find the distance to the user and add them to the usersInView array.
      const distance = findDistanceToPeer(
        [positionX, positionY],
        [value.x, value.y]
      );
      
      usersInView.push({
        username: key,
        is_broadcaster: value.is_broadcaster,
        distance: Math.round(distance),
      });
    }
  }

  usersInView.sort((a, b) => {
    if (a.distance === b.distance) return a.username.localeCompare(b.username);
    return a.distance - b.distance;
  });

  // END SOLUTION SECTION

  return usersInView;
}

const findDistanceToPeer = (peerPosition: number[], userPosition: number[]) => {
  // Find the distance to the peer avatar using phythagorean theorem
  const [peerX, peerY] = peerPosition;
  const [userX, userY] = userPosition;
  return Math.sqrt((userX - peerX) ** 2 + (userY - peerY) ** 2);
};
