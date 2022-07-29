import { trigger, animate, transition, style, group, query, animateChild, state } from '@angular/animations';

 export const goToCenter = trigger('goToCenter',[
    state('enter', style({})),
    state('leave', style({})),
    transition('enter <=> leave', [style({transform: 'translatex(-300px)'}),
    animate(
        '300ms ease-in',
        style({transform: 'translateY(0)'})
    )])
 ])