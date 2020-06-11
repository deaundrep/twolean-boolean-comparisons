/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num){
  return num > 5;
}

function topScore(num1, num2){
  return num1 > num2;
}

function isInDanger(num){
  return 60 <= num && num <= 71;
}

function isCoasting(num){
  return 72 <= num && num <= 83;
}

function isSucceeding(num){
  return 84 <= num && num <= 92;
}

function isFailing(num){
  return num < 60;
}

function isAcing(num){
  return num > 92;
}

function isStudent(str){
  return str === 'student';
}

function isTeacher(str){
  return str === 'teacher';
}

function isAdmin(str){
  return str === 'admin';
}

function isElementary(str){
  return str === 'elementary';
}

function areDifferentPeople(str1, str2){
  return str1 !== str2;
}

function isMiddleSchoolTeacher(str, num){
  return str === 'teacher' && num >= 6 && num <= 8;
}

function notAnElementarySchoolAdministrator(str1, str2){
  return str1 !== 'elementary' || str2 !== 'admin';
}
/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND F UNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
