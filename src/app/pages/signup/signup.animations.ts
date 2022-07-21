import { animate, style, transition, trigger } from "@angular/animations";

export const goUp =  
 trigger('goUp', [
    transition(':enter',[
        style({transform: 'translateY(-100px)'}),
        animate(
            '300ms ease-in',
            style({transform: 'translateY(-300px)'}), 
        ),
    ]),
]);