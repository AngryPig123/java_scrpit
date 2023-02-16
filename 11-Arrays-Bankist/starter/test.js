`use strict`;

const firstArray = [1, 2, 3, 4, 5];
const mapArray = firstArray.map((item) => item * 2);
const filterArray = firstArray.filter((item) => {
    item > 2;
});