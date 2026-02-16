let emails=["aaradhya6553@gmail.com", "abhi828886@gmail.com", "abhishek29296@gmail.com", "advika292008@gmail.com", "akshat17112006@gmail.com", "dev003135@gmail.com", "devansh02030@gmail.com", "farhan97286@gmail.com", "farhanverma07@gmail.com", "gabbar727818@gmail.com", "gargi68757@gmail.com", "garuda82829@gmail.com", "harshpatel92828@gmail.com", "raju755785@gmail.com", "sanjay857988@gmail.com", "saumya67488@gmail.com", "shreya82928@gmail.com", "shubham86545@gmail.com", "sooraj82892@gmail.com", "sureshpatel71817@gmail.com", "vijay8575337@gmail.com", "watson82827@gmail.com", "aditya010328@gmail.com", "aashi1382000@gmail.com", "dhruv46674@gmail.com", "shishir85842@gmail.com", "suyash55573@gmail.com"];
let passwords=["{ Aaradhya@1}", "{ Abhi@1}", "{ Abhishek@1}", "{ Advika@1}", "{ Akshat@1}", "{ Dev@1}", "{ Devansh@1}", "{ Farhan@1}", "{ Farhan@1}", "{ Gabbar@1}", "{ Gargi@1}", "{ Garuda@1}", "{ Harsh@1}", "{ Raju@1}", "{ Sanjay@1}", "{ Saumya@1}", "{ Shreya@1}", "{ Shubham@1}", "{ Sooraj@1}", "{ Suresh@1}", "{ Vijay@1}", "{ Watson@1}", "{ Aditya@1}", "{ Aashi@1}", "{ Dhruv@1}", "{ Shishir@1}", "{ Suyash@1}"];
let pos, check;
document.addEventListener("DOMContentLoaded", function()
                          {
                            document.body.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
                          });

window.onload=function()
{
  if(localStorage.getItem('pos')!=null)
  {
    pos=parseInt(localStorage.getItem('pos'), 10);
  }
  else
  {
    pos=0;
  }
  if(localStorage.getItem('check')!=null)
  {
    check=parseInt(localStorage.getItem('check'), 10);
  }
  else
  {
    check=1;
  }
  document.getElementById('email').value=emails[pos];
  document.getElementById('copy').textContent="Copy " + (pos+1);
};

document.getElementById('copy').addEventListener('click', function()
                                                 {
                                                   if(check===1)
                                                   {
                                                     navigator.clipboard.writeText(emails[pos]);
                                                     check=2;
                                                   }
                                                   else if(check===2)
                                                   {
                                                     navigator.clipboard.writeText(passwords[pos]);
                                                     check=1;
                                                     pos=(pos+1)%emails.length;
                                                     localStorage.setItem('pos', pos);
                                                     document.getElementById('email').value=emails[pos];
                                                     document.getElementById('copy').textContent="Copy " + (pos+1);
                                                   }
                                                   localStorage.setItem('check', check);
                                                 });
