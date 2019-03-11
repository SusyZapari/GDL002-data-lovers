const stat = document.querySelector('.indicator');
stat.innerHTML = window.roadEye.getPercent(50000, 45000) + "%";
