'use strict';

module.exports = function (menu) {

    var dashboardMenu = menu.putMenu('dashboard', {text: 'Dashboard', icon: 'fa fa-dashboard'}, 1);
    dashboardMenu.putItem('dashboard-v1', {href: '#', text: 'Dashboard v1'}, 1);
    dashboardMenu.putItem('dashboard-v2', {href: '#', text: 'Dashboard v2'}, 2);

    menu.putItem('widgets', {href: '#', text: 'Widgets', badge: 'new', class: 'bg-green', icon: 'fa fa-th'}, 2);

    var chartsMenu = menu.putMenu('charts', {text: 'Charts', icon: 'fa fa-pie-chart'}, 3);
    chartsMenu.putItem('chartjs', {href: '#', text: 'ChartJS'}, 1);
    chartsMenu.putItem('morris', {href: '#', text: 'Morris'}, 2);
    chartsMenu.putItem('flot', {href: '#', text: 'Flot'}, 3);
    chartsMenu.putItem('inline-charts', {href: '#', text: 'Inline charts'}, 4);

    var uiElementsMenu = menu.putMenu('ui-elements', {text: 'UI Elements', icon: 'fa fa-laptop'}, 4);
    uiElementsMenu.putItem('general', {href: '#', text: 'General'}, 1);
    uiElementsMenu.putItem('icons', {href: '#', text: 'Icons'}, 2);
    uiElementsMenu.putItem('buttons', {href: '#', text: 'Buttons'}, 3);
    uiElementsMenu.putItem('sliders', {href: '#', text: 'Sliders'}, 4);
    uiElementsMenu.putItem('timeline', {href: '#', text: 'Timeline'}, 5);
    uiElementsMenu.putItem('modals', {href: '#', text: 'Modals'}, 6);

    var formsMenu = menu.putMenu('forms', {text: 'Forms', icon: 'fa fa-edit'}, 5);
    formsMenu.putItem('general-elements', {href: '#', text: 'General Elements'}, 1);
    formsMenu.putItem('advanced-elements', {href: '#', text: 'Advanced Elements'}, 2);
    formsMenu.putItem('editors', {href: '#', text: 'Editors'}, 3);

    var tablesMenu = menu.putMenu('tables', {text: 'Tables', icon: 'fa fa-table'}, 6);
    tablesMenu.putItem('simple-tables', {href: '#', text: 'Simple tables'}, 1);
    tablesMenu.putItem('data-tables', {href: '#', text: 'Data tables'}, 2);

    menu.putItem('calendar', {href: '#', text: 'Calendar', badge: '3', class: 'bg-red', icon: 'fa fa-calendar'}, 7);
    menu.putItem('mailbox', {href: '#', text: 'Mailbox', badge: '12', class: 'bg-yellow', icon: 'fa fa-envelope'}, 8);

    var examplesMenu = menu.putMenu('examples', {text: 'Examples', icon: 'fa fa-folder'}, 9);
    examplesMenu.putItem('invoice', {href: '#', text: 'Invoice'}, 1);
    examplesMenu.putItem('profile', {href: '#', text: 'Profile'}, 2);
    examplesMenu.putItem('login', {href: '#', text: 'Login'}, 3);
    examplesMenu.putItem('register', {href: '#', text: 'Register'}, 4);
    examplesMenu.putItem('lockscreen', {href: '#', text: 'Lockscreen'}, 5);
    examplesMenu.putItem('404-error', {href: '#', text: '404 Error'}, 6);
    examplesMenu.putItem('500-error', {href: '#', text: '500 Error'}, 7);
    examplesMenu.putItem('blank-page', {href: '#', text: 'Blank Page'}, 8);
    examplesMenu.putItem('pace-page', {href: '#', text: 'Pace Page'}, 9);

    var multilevelMenu = menu.putMenu('multilevel', {text: 'Multilevel', icon: 'fa fa-share'}, 10);
    multilevelMenu.putItem('level-one-1', {href: '#', text: 'Level One'}, 1);

    var levelOneMenu = multilevelMenu.putMenu('level-one-2', {href: '#', text: 'Level One'}, 2);
    levelOneMenu.putItem('level-two-1', {href: '#', text: 'Level Two1'}, 1);

    var levelTwoMenu = levelOneMenu.putMenu('level-two-2', {href: '#', text: 'Level Two2'}, 2);
    levelTwoMenu.putItem('level-three-1', {href: '#', text: 'Level Three1'}, 1);
    levelTwoMenu.putItem('level-three-2', {href: '#', text: 'Level Three2'}, 2);

    multilevelMenu.putItem('level-one-3', {href: '#', text: 'Level One'}, 3);

    menu.putItem('documentation', {href: '#', text: 'Documentation', icon: 'fa fa-book'}, 11);

    var labels = [
        {
            color: 'red',
            text: 'Important',
            href: '#'
        },
        {
            color: 'yellow',
            text: 'Warning',
            href: '#'
        },
        {
            color: 'aqua',
            text: 'Information',
            href: '#'
        }
    ];

    return {
        labels: labels
    }
};