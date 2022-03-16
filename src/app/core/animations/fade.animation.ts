import { animate, query, style, transition, trigger } from '@angular/animations';

const ANIMATION_LENGTH: string = '0.3s';

export const FADE_ANIMATION = trigger('fadeAnimation', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({
                    opacity: 0
                })
            ],
            {
                optional: true
            }
        ),
        query(
            ':leave',
            [
                style({
                    opacity: 1,
                    height: 0,
                    display: 'block'
                }),
                animate(ANIMATION_LENGTH, style({
                    opacity: 0
                }))
            ],
            {
                optional: true
            }
        ),
        query(
            ':enter',
            [
                style({
                    opacity: 0
                }),
                animate(ANIMATION_LENGTH, style({
                    opacity: 1
                }))
            ],
            {
                optional: true
            }
        )
    ])
]);
