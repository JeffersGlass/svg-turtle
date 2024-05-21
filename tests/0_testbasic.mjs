import {jest} from '@jest/globals';
import {Graphic} from '../dist/svg-turtle.esm'

test('that tests run', () => {
    const g = new Graphic();
    expect(g).toHaveProperty('currentX');
})