window.onload = function() {
    var projects = [
        {title: 'Project 1', description: 'Description of Project 1', link: '#'},
        {title: 'Project 2', description: 'Description of Project 2', link: '#'},
        {title: 'Project 3', description: 'Description of Project 3', link: '#'}
    ];
    var projectList = document.getElementById('project-list');
    for (var i = 0; i < projects.length; i++) {
        var project = document.createElement('div');
        project.innerHTML = '<h3>' + projects[i].title + '</h3>' +
                            '<p>' + projects[i].description + '</p>' +
                            '<a href="' + projects[i].link + '">View Project</a>';
        projectList.appendChild(project);
    }
}
