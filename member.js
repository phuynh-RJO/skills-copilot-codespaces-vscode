function skillsMember() {
    if (document.getElementById('skills') !== null) {
        let skills = document.getElementById('skills').value;
        if (skills !== '') {
            let skillsArray = skills.split(',');
            for (let i = 0; i < skillsArray.length; i++) {
                let skill = skillsArray[i];
                let skillElement = document.createElement('li');
                skillElement.innerHTML = skill;
                document.getElementById('skillsList').appendChild(skillElement);
            }
        }
    }
}