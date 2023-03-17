import projectData from './data.js';

document.querySelector('.all-speakers').innerHTML = projectData
  .map(
    (data) => ` <div class='speakers flex'>
    <div class='speaker-img'>
        <img src='${data.speakersImg}' alt='' class='scholor'>
    </div>
    <div class='scholors-name'>
        <h3 class='name'>${data.name}</h3>
        <p class='rank'>${data.rank}.</p>
        <span class='red-bar blue flex'></span>
        <p class='qualification'>${data.role}.</p>
    </div>
</div>`,
  )
  .join('');
