import Classroom from './0-classroom.js';

export default function initializeRooms() {
  
    let c1 = new Classroom(19),
    let c2 = new Classroom(20),
    let c3 = new Classroom(34),
    
    return [c1, c2, c3];
}

export default initializeRooms;
