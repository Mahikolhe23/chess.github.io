export function addPawnPieceToObj(obj) {
    const rank = obj.id[1];
    if (rank == 2) {
        return "../pieces/black/pawn.png";
    } else if (rank == 7) {
        return "../pieces/black/pawn.png";
    } else {
        return false;
    }
}
