function handleTabClick(tabName) {
    const experienceTab = document.getElementById('experience');
    const educationTab = document.getElementById('education');
  
    if (tabName === 'experience') {
      experienceTab.classList.remove('hidden');
      educationTab.classList.add('hidden');
    } else {
      educationTab.classList.remove('hidden');
      experienceTab.classList.add('hidden');
    }
  
    document.querySelectorAll('.skill-link').forEach(link => {
      if (link.dataset.content === tabName) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }
  