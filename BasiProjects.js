// The Program to Hide the Email
function maskEmail(email){
  const atIdx = email.indexOf("@");
  const chgAst = email.slice(1,atIdx-1);
  const result = email.replace(chgAst, '*'.repeat(chgAst.length));
  return result
}
const email = "apple.pie@example.com";
console.log(maskEmail(email))  // output: a*******e@example.com
