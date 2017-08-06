
var apiKey  = '19ab300X47186jxVUMCM3mpt0Mel4Ld0';
var userID  = 'diogommr';

(function() {
    var perPage = 12;
    var projectsURL = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key=' + apiKey + '&per_page=' + perPage;

    $.getJSON(projectsURL, function(project) {
        var projectsObj = JSON.parse(JSON.stringify(project));
        /* ---------- Generate thumbnails ---------- */
        for (var proj = 0; proj < projectsObj.projects.length; proj++){
            var projectName = projectsObj.projects[proj].name;
            var projectImage = projectsObj.projects[proj].covers[404];
            var projectID = projectsObj.projects[proj].id;
            $('.portfolio-gallery').append('<div class="portfolio-project" data-id="'+projectID+'" style="background: url('+projectImage+') no-repeat center; background-size: cover">'+
            '<div class="portfolio-project-overlay"></div>'+
            '</div>');
        }

        /* ---------- Blur fx ---------- */
        $('.portfolio-project').hover(function(){
            $('#portfolio h2, #portfolio h4').css('filter', 'blur(1.5px)');
            $('.portfolio-project:not(:hover)').css('filter', 'blur(1.5px) grayscale(0.8)');
            $('.portfolio-project:hover').css('filter', 'blur(0) grayscale(0)');
        }, function(){
            $('#portfolio h2, #portfolio h4').css('filter', 'blur(0)');
            $('.portfolio-project').css('filter', 'blur(0) grayscale(0.8)');
        });

        /* ---------- Generate Modal ---------- */
        $('.portfolio-project').click(function(){
            $('body, html').css('overflow', 'hidden'); // hide main page scrollbar
            $('.portfolio-project-modal-wrapper').show();

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

                $('.modal-title').html(name); /* Top bar Project Name */

                $('.portfolio-project-modal-body').append('<div class="portfolio-project-modal-content"></div>');

                for (var module = 0; module < modules.length; module++){
                    if (modules[module].type === "image"){
                        //console.log( modules[module].sizes.original );
                        $('.portfolio-project-modal-content').append('<img src="'+ modules[module].sizes.original +'" />');
                    }
                    if (modules[module].type === "embed"){
                        //console.log( modules[module].embed );
                        var original_iframe = modules[module].embed;
                        var width_re = /width=".*?"/;
                        var height_re = /height=".*?"/;
                        var new_iframe;
                        if ( width_re.test(original_iframe) ){
                            new_iframe = original_iframe.replace(/width=".*?"/, 'width="'+ (window.innerWidth - 40) +'"');
                        }
                        if ( height_re.test(original_iframe) ){
                            new_iframe = original_iframe.replace(/height=".*?"/, 'height="'+ (((window.innerWidth - 40) * 9) / 16) +'"');
                        }
                        console.log( new_iframe );
                        $('.portfolio-project-modal-content').append('<div class="embeded ratio-square">'+ new_iframe +'</div>');
                    }
                    if (modules[module].caption){
                        //console.log( modules[module].caption_plain );
                        $('.portfolio-project-modal-content').append('<span class="caption">'+modules[module].caption_plain+'</span>');
                    }
                    if (modules[module].paragraph){
                        //console.log( modules[module].paragraph );
                        $('.portfolio-project-modal-content').append(modules[module].paragraph);
                    }
                    $('.portfolio-project-modal-content').css('background', '#'+bgColor);
                }
                $('.portfolio-project-modal-body').append('<div class="portfolio-project-modal-footer"><a href="'+projectLink+'" target="_blank"><img src="images\\powered_by_behance-115px.png" class="powered_by_behance"/></a></div>');
            });
        });

        $('.close-button').click(function(){
            $('.portfolio-project-modal-wrapper').hide();
            $('.portfolio-project-modal-body').html('');
            $('body, html').css('overflow', 'auto'); // show main page scrollbar
        });
        /* --- */

    });
})();
