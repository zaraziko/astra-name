const allNames = [
    {name:"Ариэль", gender:"girl", length:"medium", meaning:"joy", unique:"rare", numerology:3},
    {name:"Мила", gender:"girl", length:"short", meaning:"love", unique:"common", numerology:6},
    {name:"Максим", gender:"boy", length:"medium", meaning:"strength", unique:"common", numerology:1},
    {name:"Лея", gender:"girl", length:"short", meaning:"wisdom", unique:"rare", numerology:2},
    {name:"Даниэль", gender:"boy", length:"long", meaning:"wisdom", unique:"rare", numerology:4},
    {name:"София", gender:"girl", length:"medium", meaning:"wisdom", unique:"common", numerology:7},
    {name:"Иван", gender:"boy", length:"short", meaning:"strength", unique:"common", numerology:5},
    {name:"Ева", gender:"girl", length:"short", meaning:"joy", unique:"common", numerology:9},
    {name:"Алексей", gender:"boy", length:"long", meaning:"love", unique:"rare", numerology:8},
];

function generateNames(){
    const form = document.getElementById('nameForm');
    const gender=form.gender.value;
    const length=form.length.value;
    const meaning=form.meaning.value;
    const unique=form.unique.value;
    const numerology=form.numerology.value;

    let filtered = allNames.filter(n=>{
        return (gender==="unknown"||n.gender===gender) &&
               (length===""||n.length===length) &&
               (meaning===""||n.meaning===meaning) &&
               (unique===""||n.unique===unique) &&
               (numerology===""||n.numerology==numerology);
    });

    const nameListDiv=document.getElementById('nameList');
    nameListDiv.innerHTML='';

    if(filtered.length===0){
        nameListDiv.innerHTML="<p>К сожалению, подходящих имен не найдено. Попробуйте изменить параметры.</p>";
        return;
    }

    filtered.forEach(name=>{
        const div=document.createElement('div');
        div.className='card';
        div.style.opacity=0;
        div.innerHTML=`<h3>${name.name}</h3>
                       <p>Значение: ${name.meaning}</p>
                       <p>Уникальность: ${name.unique}</p>
                       <p>Гармония: ${renderStars(name.numerology)}</p>`;
        nameListDiv.appendChild(div);
        setTimeout(()=>{div.style.opacity=1; div.style.transition="opacity 0.6s ease";},50);
    });

    document.getElementById('results').scrollIntoView({behavior:'smooth'});
}

function renderStars(num){
    let stars="";
    for(let i=0;i<num;i++){stars+="⭐";}
    return stars;
}