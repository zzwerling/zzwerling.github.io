
jQuery(function($, undefined) {
    $('body').terminal(function(command) {

        if (command.includes("zachary")){
            this.echo("Running zachary.sh......");
        }else if(command == "help"){
            this.echo("_ _     _            __                                                 _     \n" +
                "| (_)___| |_    ___  / _|   ___ ___  _ __ ___  _ __ ___   __ _ _ __   __| |___ \n" +
                "| | / __| __|  / _ \\| |_   / __/ _ \\| '_ ` _ \\| '_ ` _ \\ / _` | '_ \\ / _` / __|\n" +
                "| | \\__ \\ |_  | (_) |  _| | (_| (_) | | | | | | | | | | | (_| | | | | (_| \\__ \\\n" +
                "|_|_|___/\\__|  \\___/|_|    \\___\\___/|_| |_| |_|_| |_| |_|\\__,_|_| |_|\\__,_|___/");
            this.echo('\nlinkedin: go to my linkedin');
            this.echo('github: go to my github');
            this.echo('zachary: go to the main website\n');
        }else if(command == "linkedin"){
            window.location.replace("https://www.linkedin.com/in/zachary-zwerling/");
        }else if(command == "github"){
            window.location.replace("https://github.com/zzwerling");
        } else{
            this.error('Unrecognized command. Please type help for a list of available commands. Type zachary to enter the main website.\n')
        }



    }, {
        greetings: 'Welcome to my website. Please run zachary.sh, or simply type "zachary", followed by enter to enter the main website.\n To view other commands, please type "help" (without the quotes) for a list of commands\n',
        name: 'js_demo',
        prompt: 'root@root> '
    });

});

