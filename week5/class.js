class ClassRoom {
    constructor(maxStudentsSize) {
        this._maxStudentsSize = 
        maxStudentsSize;
    }
    get maxStudentsSize() {
        return this._maxStudentsSize;
    }
    set maxStudentsSize(value) {
        if (typeof value!== "number") {
            throw new Error("maxStudentsSize must be a number");
        }
        this._maxStudentsSize = value;
    }
}
export default ClassRoom;
const classRoom = new 
ClassRoom(30);
console.log(classroom_maxStudentsSize);