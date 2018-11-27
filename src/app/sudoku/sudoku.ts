export class Sudoku {
    cells: Cell[] = [];
    rows: Group[] = [];
    columns: Group[] = [];
    boxes: Group[] = [];
    groups: Group[] = [];

    constructor() {
        for (let i = 1; i <= 9; i++) {
            this.rows.push(new Group("Row " + i));
            this.columns.push(new Group("Column " + i));
            this.boxes.push(new Group("Box " + i));
        }
        this.groups.push(...this.rows, ...this.columns, ...this.boxes);
        for (let i = 0; i < 81; i++) {
            let r = ~~(i / 9);
            let c = i % 9;
            let b = (~~(r / 3)) * 3 + ~~(c / 3);
            let cell = new Cell("Cell (" + (r + 1) + ", " + (c + 1) + ")");
            cell.row = this.rows[r];
            cell.column = this.columns[c];
            cell.box = this.boxes[b];
            cell.row.cells.push(cell);
            cell.column.cells.push(cell);
            cell.box.cells.push(cell);
            this.cells.push(cell);
        }
    }

    load(data: string): void {
        data = data.replace(/\D+/g, "");
        if (data.length != 81) {
            throw new Error("Invalid input: " + data);
        }
        for (let cell of this.cells) {
            cell.notes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
        let z = "0".charCodeAt(0);
        for (let i = 0; i < 81; i++) {
            let cell: Cell = this.cells[i];
            cell.initial = data.charCodeAt(i) - z;
            cell.setValue(cell.initial);
        }
    }

    reset(): void {
        for (let cell of this.cells) {
            cell.notes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
        for (let cell of this.cells) {
            cell.setValue(cell.initial);
        }
    }

    hint(): string {
        let message = this.findSingles();
        if (message == null) {
            message = this.findUnique();
        }
        if (message == null) {
            message = this.findPairs();
        }
        return message;
    }

    findSingles(): string {
        for (let cell of this.cells) {
            if (cell.notes.length == 1) {
                cell.setValue(cell.notes[0]);
                return cell.id + " can have only " + cell.value;
            }
        }
        return null;
    }

    findUnique(): string {
        let message: string = null;
        for (let group of this.groups) {
            message = group.findUnique();
            if (message != null) {
                break;
            }
        }
        return message;
    }

    findPairs(): string {
        let message: string = null;
        for (let group of this.groups) {
            message = group.findPairs();
            if (message != null) {
                break;
            }
        }
        return message;
    }
}

export class Cell {
    id: string;
    initial: number = 0;
    value: number = 0;
    notes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    row: Group;
    column: Group;
    box: Group;

    constructor(id: string) {
        this.id = id;
    }

    setValue(value: number) {
        this.value = value;
        if (value != 0) {
            this.notes = [];
            this.row.remove(value);
            this.column.remove(value);
            this.box.remove(value);
        }
    }

    toString() {
        return this.value == 0 ? this.notes : this.value;
    }

}

export class Group {
    id: string;
    cells: Cell[] = [];

    constructor(id: string) {
        this.id = id;
    }

    remove(value: number) {
        for (let cell of this.cells) {
            let index = cell.notes.indexOf(value);
            if (index > -1) {
                cell.notes.splice(index, 1);
            }
        }
    }

    findUnique(): string {
        let notes = new Map<number, Cell[]>();
        for (let cell of this.cells) {
            for (let note of cell.notes) {
                if (!notes.has(note)) {
                    notes.set(note, []);
                }
                notes.get(note).push(cell);
            }
        }
        for (let note of Array.from(notes.entries())) {
            if (note[1].length == 1) {
                let cell = note[1][0];
                let value = note[0];
                cell.setValue(value);
                return this.id + " can have only " + value + " at " + cell.id;
            }
        }
        return null;
    }

    findPairs(): string {
        return null;
    }

    toString(): string {
        return this.id;
    }

    cellCombination(k: number): Cell[][] {
        let combinations: number[][] = this.combination(9, k);
        let cellCombinations: Cell[][] = [];
        for (let combination of combinations) {
            let cells: Cell[] = [];
            for (let i of combination) {
                let cell: Cell = this.cells[i];
                if (cell.value != 0) {
                    cells = null;
                    break;
                }
                cells.push(cell);
            }
            if (cells != null) {
                cellCombinations.push(cells);
            }
        }
        return cellCombinations;
    }

    combination(n: number, k: number): number[][] {
        let combinations: number[][] = [];
        for (let i = 0; i < n; i++) {
            combinations[i] = [i];
        }
        for (let i = 1; i < k; i++) {
            let newCombinations: number[][] = [];
            for (let combination of combinations) {
                let last: number = combination[combination.length - 1];
                for (let j = last + 1; j < n; j++) {
                    let newCombination: number[] = combination.slice();
                    newCombination.push(j);
                    newCombinations.push(newCombination);
                }
            }
            combinations = newCombinations;
        }
        return combinations;
    }
}

