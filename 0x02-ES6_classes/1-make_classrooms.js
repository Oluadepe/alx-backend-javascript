import ClassRoom from "./0-classroom.js"

export default function initializeRooms() {
  let cr1 = new ClassRoom(19);
  let cr2 = new ClassRoom(20);
  let cr3 = new ClassRoom(34);
  return [cr1, cr2, cr3];
}
