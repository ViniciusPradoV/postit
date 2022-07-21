import { trigger, animate, transition, style, group, query, animateChild } from '@angular/animations';

export const goDown =  
 trigger('goDown', [
    transition(':enter',[
        style({transform: 'translateY(-300px)'}),
        animate(
            '300ms ease-in',
            style({transform: 'translateY(0)'})
        ),
    ]),
]);