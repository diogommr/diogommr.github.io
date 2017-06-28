
var apiKey  = '19ab300X47186jxVUMCM3mpt0Mel4Ld0';
var userID  = 'diogommr';

(function() {
    var perPage = 12;
    var projectsURL = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key=' + apiKey + '&per_page=' + perPage;

    $.getJSON(projectsURL, function(project) {
        var projectsObj = JSON.parse(JSON.stringify(project));

        for (var proj = 0; proj < projectsObj.projects.length; proj++){
            var projectName = projectsObj.projects[proj].name;
            var projectImage = projectsObj.projects[proj].covers[404];
            var projectID = projectsObj.projects[proj].id;
            $('.portfolio-cont').append('<div class="project" data-id="'+projectID+'" style="background: url('+projectImage+') no-repeat center; background-size: cover">'+
            //'<img src="'+projectImage+'" />'+
            //'<h3>'+projectName+'</h3>'+
            //'<a href="'+projectLink+'">Open Project</a>'+
            '<div class="project-overlay"></div>'+
            '</div>');
        }
        $('.project').width(  );
        $('.project').height( ($('.project').width())/3*2 );

        /* --- */
        $('.project').click(function(){
            $('.project-modal-wrapper').show();
            var id = $(this).attr('data-id');
            $.getJSON('http://www.behance.net/v2/projects/'+ id +'?api_key='+ apiKey + '&callback=?', function(project) {
                var projectObj = JSON.parse(JSON.stringify(project));
                var fields = projectObj.project.fields;
                var modules = projectObj.project.modules;
                var name = projectObj.project.name;
                var titleColor = projectObj.project.styles.text.title.color;
                var captionColor = projectObj.project.styles.text.caption.color;
                var paragraphColor = projectObj.project.styles.text.paragraph.color;
                var projectLink = projectObj.project.url;
                var bgColor = projectObj.project.styles.background.color;

                $('.project-modal-body').append('<div class="project-modal-header"><h2>'+ name +'</h2></div>');
                //$('h2').css('color', titleColor);

                $('.project-modal-body').append('<div class="project-modal-content"></div>');

                for (var module = 0; module < modules.length; module++){
                    if (modules[module].type === "image"){
                        //console.log( modules[module].sizes.original );
                        $('.project-modal-content').append('<img src="'+ modules[module].sizes.original +'" />');
                    }
                    if (modules[module].type === "embed"){
                        //console.log( modules[module].embed );
                        $('.project-modal-content').append('<div class="embeded">'+modules[module].embed+'</div>');
                    }
                    if (modules[module].caption){
                        //console.log( modules[module].caption_plain );
                        $('.project-modal-content').append('<span class="caption">'+modules[module].caption_plain+'</span>');
                    }
                    if (modules[module].paragraph){
                        //console.log( modules[module].paragraph );
                        $('.project-modal-content').append(modules[module].paragraph);
                    }
                    $('.project-modal-content').css('background', '#'+bgColor);
                }
                $('.project-modal-body').append('<div class="project-modal-footer"><a href="'+projectLink+'" target="_blank"><img src="images\\powered_by_behance-115px.png" class="powered_by_behance"/></a></div>');
            });
        });

        $('.project-modal-wrapper i').click(function(){
            $('.project-modal-wrapper').hide();
            $('.project-modal-body').html('');
        });
        /* --- */

    });
})();
