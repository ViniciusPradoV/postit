import { trigger, animate, transition, style, group, query, animateChild } from '@angular/animations';

export const container =
  trigger('routeAnimations', [
    transition(':enter,:leave',
    [
        query('@*', animateChild(), {optional: true}),
    ]),
  ]);