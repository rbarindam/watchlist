const taskbar = {};

$(() => {
    taskbar.initialize();
});

taskbar.initialize = () => {
    const active = 'active';

    taskbar.button = {};
    taskbar.menus = $('.menu');
    taskbar.it = $('.taskbar');
    taskbar.buttons = taskbar.it.find('button.taskbar-action')
    .each(function() {
        const it = $(this);
        const id = it.attr('id');
        taskbar.button[id] = $(`.menu[for="${id}"]`);
    }).on('click', function() {
        const it = $(this);
        const id = it.attr('id');
        if( it.hasClass(active) ) {
            it.removeClass(active).trigger('blur');
            taskbar.button[id].removeClass(active);
        } else {
            taskbar.buttons.removeClass(active);
            taskbar.menus.removeClass(active);
            it.addClass(active);
            taskbar.button[id].addClass(active).find(':input:visible:first').trigger('focus');
        }
    })
}