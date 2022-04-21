const addbutton=document.querySelector('#add');

const updatelsdata=()=>{

    const textareadata=document.querySelectorAll('textarea')
    const notes=[];
    textareadata.forEach((data)=>{
   
  return notes.push(data.value)

    })
    localStorage.setItem('notes',JSON.stringify(notes))
}

const addnewnote=(text='')=>{
   const note=document.createElement('div');
   note.classList.add('note');
   const f=Math.random
   localStorage.setItem
   const data=` 
   <div class="operation">
   <button class="edit"><i class="fas fa-edit"></i></button>
   <button class="delete" id=a${f} ><i class="fas fa-trash-alt"></i></button>
   </div>
   <div class="main ${text?"":"hidden"}"></div>
   <textarea class="hh ${text?"hidden":""}"></textarea>
   `;
note.innerHTML = data
console.log(note);
const  editbutton=note.querySelector('.edit')
const  deletebutton=note.querySelector('.delete')
const textarea=note.querySelector('textarea')
const  main=note.querySelector('.main')
deletebutton.addEventListener('click',()=>{
note.remove();
updatelsdata();
})
textarea.value=text
main.innerHTML=text
editbutton.addEventListener('click',()=>{

    main.classList.toggle('hidden')//to toggle between main and hidden class (in css file)
    
    textarea.classList.toggle('hidden')
    updatelsdata()

})
textarea.addEventListener('change',(event)=>{
    const value=event.target.value//dynamically get value from gtextarea and update in the main section
    main.innerHTML=value

})



document.getElementById('cont1').appendChild(note)


}

//getting data from local storage
const notes=JSON.parse(localStorage.getItem('notes'))
console.log(notes)
if(notes)
{

    notes.forEach((note)=> {addnewnote(note)
        console.log(note)});

}

addbutton.addEventListener('click',()=>addnewnote());
