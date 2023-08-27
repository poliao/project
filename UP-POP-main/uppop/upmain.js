$('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true
  });


const afterfollowed1 = document.getElementById('star-followed1');
const starchage1 = document.getElementById('star-chage1');
const setting = document.getElementById('setting');
const createnew = document.createElement('img');

let h = 380;

function followed1(){
  let text ="คุณต้องการจะติดตามกิจกรรมนี้ใช่มั้ย";
  if(afterfollowed1.value == "Following"){
    if(confirm(text)==true){
      afterfollowed1.style.background="#FFDD02";
      starchage1.src = "image-uppop/star-after.svg";
      afterfollowed1.value = "Cancelfollow";

      createnew.src = "image-uppop/add-follow.svg";
      h += 130;
      setting.style.height = h+"px";

      createnew.setAttribute("class","center")
      document.getElementById('follow-add').appendChild(createnew);
    }else{

    }
  }else if(afterfollowed1.value == "Cancelfollow"){
    let textcancel ="คุณต้องการเลิกติดตามกิจกรรมนี้ใข่มั้ย"
    if(confirm(textcancel)==true){
      h -= 130;
      setting.style.height = h+"px";
      document.getElementById('follow-add').removeChild(createnew);
      afterfollowed1.value = "Following";
      afterfollowed1.style.background="#ffffff80";
      starchage1.src = "image-uppop/star-before.svg";
    }else{
    
    }
  }
}

const afterfollowed2 = document.getElementById('star-followed2');
const starchage2 = document.getElementById('star-chage2');
const newadd = document.getElementById('new-add');

function followed2(){
  let text ="คุณต้องการจะติดตามกิจกรรมนี้ใช่มั้ย";
  if(afterfollowed2.value == "Following"){
    if(confirm(text)==true){
      afterfollowed2.style.background="#FFDD02";
      starchage2.src = "image-uppop/star-after.svg";
      afterfollowed2.value = "Cancelfollow";

      const createnew = document.createElement('img');
      createnew.src = "image-uppop/new-add.svg";
      document.getElementById('new-add').appendChild(createnew);
    }else{

    }
  }else if(afterfollowed2.value == "Cancelfollow"){
    let textcancel ="คุณต้องการเลิกติดตามกิจกรรมนี้ใข่มั้ย"
    if(confirm(textcancel)==true){
      afterfollowed2.value = "Following";
      afterfollowed2.style.background="#ffffff80";
      starchage2.src = "image-uppop/star-before.svg";
    }else{
    
    }
  }
}


