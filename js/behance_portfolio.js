
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
            $('.portfolio-gallery').append('<div class="portfolio-project" data-id="'+projectID+'" style="background: url('+projectImage+') no-repeat center; background-size: cover">'+
            '<div class="portfolio-project-overlay"></div>'+
            '</div>');
        }
        //$('.portfolio-project').width();
        $('.portfolio-project').height( ($('.portfolio-project').width())/3*2 );

        /* --- */
        $('.portfolio-project').click(function(){
			// Show Modal Window
			$('body, html').css('overflow', 'hidden');
	        $('.modal-wrapper').show();
	        $('.modal-wrapper').css('display', 'flex');



			// Modal Window Content
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

				$('.modal-title').html(name); /* Top Bar Project Name */
		        $('.modal-body').append('<div class="portfolio-project-modal-content"></div>');

                for (var module = 0; module < modules.length; module++){
					if (modules[module].type === "text"){
                        $('.portfolio-project-modal-content').append('<p>' + modules[module].text_plain + '</p>');
                    }/*
					if (modules[module].type === "text"){
                        $('.portfolio-project-modal-content').append(modules[module].text);
                    }*/
                    if (modules[module].type === "image"){
                        $('.portfolio-project-modal-content').append('<img src="'+ modules[module].sizes.original +'" />');
                    }
					if (modules[module].type === "media_collection"){
						for(var i = 0; i < modules[module].components.length; i++){
							$('.portfolio-project-modal-content').append('<img src="'+ modules[module].components[i].sizes.source +'" />');
						}
                    }
                    if (modules[module].type === "embed"){
                        $('.portfolio-project-modal-content').append('<div class="embeded">'+modules[module].embed+'</div>');
                    }
                    if (modules[module].caption){
                        $('.portfolio-project-modal-content').append('<span class="caption">'+modules[module].caption_plain+'</span>');
                    }
                    if (modules[module].paragraph){
                        $('.portfolio-project-modal-content').append(modules[module].paragraph);
                    }/*
                    $('.portfolio-project-modal-content').css('background', '#'+bgColor);*/
                }

                $('.portfolio-project-modal-content').append('<div class="portfolio-project-modal-footer"><a class="powered_by_behance" href="'+projectLink+'" target="_blank"><img src="images\\powered_by_behance-115px.png" /></a></div>');
            });
        });
        /* --- */

    });
})();
