// // function twoDimensions(upRight) {
// //   let res = 0;
// //   let rowCount = 0;
// //   let colCount = 0;
// //   let n = upRight.length;

// //   for (let i = 0; i < n; i++) {
// //     const row = parseInt(upRight[i][0]);
// //     const col = parseInt(upRight[i][2]);

// //     if (row > rowCount) rowCount = row;
// //     if (col > colCount) colCount = col;
// //   }

// //   const tempArr = Array.from({ length: rowCount + 1 }, () => Array(colCount + 1).fill(0));

// //   for (let i = 0; i < n; i++) {
// //     const row = parseInt(upRight[i][0]);
// //     const col = parseInt(upRight[i][2]);

// //     for (let j = row; j >= 1; j--) {
// //       const m = j;
// //       for (let k = 1; k <= col; k++) {
// //         tempArr[m][k] = tempArr[m][k] + 1;
// //         if (tempArr[m][k] > res) res = tempArr[m][k];
// //       }
// //     }
// //   }

// //   return res;
// // }

// // function twoDimensions(upRight) {
// //   let res = 0;

// //   let rowCount = 0;

// //   let colCount = 0;

// //   let n = upRight.length;

// //   for (let i = 0; i < n; i++) {
// //     const row = parseInt(upRight[i][0]);

// //     const col = parseInt(upRight[i][2]);

// //     if (row > rowCount) rowCount = row;

// //     if (col > colCount) colCount = col;
// //   }
// //   const tempArray = Array.from({ length: rowCount + 1 }, () => Array(colCount + 1).fill(0));

// //   for (let i = 0; i < n; i++) {
// //     const row = parseInt(upRight[i][0]);
// //     const col = parseInt(upRight[i][2]);

// //     for (let j = row; j >= 1; j--) {
// //       const m = j;

// //       for (let k = 1; k <= col; k++) {
// //         tempArray[m][k] = tempArray[m][k] + 1;
// //         if (tempArray[m][k] > res) res = tempArray[m][k];
// //       }
// //     }
// //   }
// //   return res;
// // }

// // function twoDimensions(upRight) {
// //     let rowCount = 0, colCount = 0, res = 0;

// //     upRight.forEach(ur => {
// //       const [row, col] = ur.split(" ").map(Number);
// //       rowCount = Math.max(rowCount, row);
// //       colCount = Math.max(colCount, col);
// //     });

// //     const tempArr = Array.from({ length: rowCount + 1 }, () => Array(colCount + 1).fill(0));

// //     upRight.forEach(ur => {
// //       const [row, col] = ur.split(" ").map(Number);
// //       for (let j = row; j >= 1; j--) {
// //         for (let k = 1; k <= col; k++) {
// //           res = Math.max(res, ++tempArr[j][k]);
// //         }
// //       }
// //     });

// //     return res;
// //   }

// function maxCells(upRight) {
//   const grid = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
//   ];
//   const coordinates = [];
//   for (const coordinateStr of upRight) {
//     const [r, c] = coordinateStr.split(",");
//     coordinates.push([parseInt(r), parseInt(c)]);
//   }
//    // Initialize the maximum value and the number of cells with the maximum value.
//    let maxValue = 0;
//    let numMaxCells = 0;
 
//    // Iterate over the coordinates and add 1 to each element in the range from (1, 1) to (r, c) inclusive.
//    for (const [r, c] of coordinates) {
//      for (let i = 1; i <= r; i++) {
//        for (let j = 1; j <= c; j++) {
//          grid[i][j] += 1;
//          maxValue = Math.max(maxValue, grid[i][j]);
//        }
//      }
//    }
 
//    // Iterate over the grid and count the number of cells with the maximum value.
//    for (let i = 1; i < grid.length; i++) {
//      for (let j = 1; j < grid[i].length; j++) {
//        if (grid[i][j] === maxValue) {
//          numMaxCells++;
//        }
//      }
//    }
 
//    return numMaxCells;
// }
// const inputList = ["2 3", "3, 7", "4 1"];
// const result = maxCells(inputList);
// console.log(result);


function maxCells(grid, coordinates) {
    // Initialize the maximum value and the number of cells with the maximum value.
    let maxValue = 0;
    let numMaxCells = 0;
  
    // Iterate over the coordinates and add 1 to each element in the range from (1, 1) to (r, c) inclusive.
    for (const [r, c] of coordinates) {
      for (let i = 1; i <= r; i++) {
        for (let j = 1; j <= c; j++) {
          grid[i][j] += 1;
          maxValue = Math.max(maxValue, grid[i][j]);
        }
      }
    }
  
    // Iterate over the grid and count the number of cells with the maximum value.
    for (let i = 1; i < grid.length; i++) {
      for (let j = 1; j < grid[i].length; j++) {
        if (grid[i][j] === maxValue) {
          numMaxCells++;
        }
      }
    }
  
    return numMaxCells;
  }
  
  const inputList = ["2 3", "3, 7", "4 1"];
  
  // Initialize the coordinates variable.
  const coordinates = [];
  for (const coordinateStr of inputList) {
    const [r, c] = coordinateStr.split(",");
    coordinates.push([parseInt(r), parseInt(c)]);
  }
  
  const numMaxCells = maxCells([[0, 0, 0], [0, 0, 0], [0, 0, 0]], coordinates);
  
  console.log(numMaxCells); // 2